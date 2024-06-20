import { useCallback, useContext, useEffect, useState } from 'react';
import md5 from 'md5';

import { WSContext } from 'contexts';
import { getObjectsDiffDeep } from 'utils';

import { Block } from 'contexts/WS/ws.types';

interface useWSProps<T> {
  block: Block;
  id?: number | string;
  filter?: object;
  transform?: (props: T) => any;
  transformRaw?: (props: any) => T;
  subscription?: boolean;
  listener?: boolean;
}

export const useWS = <T>(props: useWSProps<T>) => {
  const {
    block,
    id,
    filter,
    listener = true,
    subscription = true,
    transform,
    transformRaw
  } =
    props || {};
  const { isReady, instance, connect, disconnect, send } = useContext(
    WSContext
  );

  const [data, setData] = useState<T | undefined>();
  const [focusedFields, setFocusedFields] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(Boolean(listener));
  const [isSubscribed, setSubscribed] = useState<boolean | null>(false);
  const [hashId, setHashId] = useState<string>('');

  const subscribe = useCallback(
    () => {
      if (isSubscribed) return;

      send({ command: 'subscribe', block, id, filter });
      setSubscribed(true);
    },
    [isSubscribed, block, id, filter, send]
  );

  const unsubscribe = useCallback(
    () => {
      if (!isSubscribed) return;

      send({ command: 'unsubscribe', block, id, filter });
      setSubscribed(false);
    },
    [isSubscribed, block, id, filter, send]
  );

  const update = (newData: Partial<T>) => {
    if (!data) return;

    send({
      command: 'update',
      block,
      id,
      data: getObjectsDiffDeep(data, newData)
    });

    setData({
      ...data,
      ...newData
    });
  };

  const add = (data: Partial<T>) => {
    send({ command: 'add', block, data });
  };

  const onMessage = useCallback(
    (event: MessageEvent<any>) => {
      const {
        data: eventData,
        block: eventBlock,
        focus: focusedFieldName,
        blur: bluredFieldName,
        success,
        errors
      } = JSON.parse(event.data);

      if (focusedFieldName) {
        setFocusedFields([...focusedFields, focusedFieldName]);
      }

      if (bluredFieldName) {
        setFocusedFields(
          focusedFields.filter(name => name !== bluredFieldName)
        );
      }

      const transformedData = transformRaw
        ? transformRaw(eventData)
        : eventData;

      if (eventBlock === block && (eventData || success || errors)) {
        setData({
          ...data,
          ...transformedData,
          errors,
          success
        });

        setLoading(false);
      }
    },
    [block, data, focusedFields, transformRaw]
  );

  const focus = (fieldName: string) => {
    send({
      command: 'focus',
      block,
      id,
      field: fieldName
    });
  };

  const blur = (fieldName: string) => {
    send({
      command: 'blur',
      block,
      id,
      field: fieldName
    });
  };

  useEffect(
    () => {
      if (!filter || !isReady || !subscription) return;

      const currentHashId = md5(JSON.stringify(filter));

      if (currentHashId !== hashId || hashId === '') {
        send({ command: 'unsubscribe', block, id: currentHashId, filter });
        send({ command: 'subscribe', block, id: currentHashId, filter });
        setHashId(currentHashId);
      }
    },
    [isReady, subscription, hashId, block, filter, send]
  );

  useEffect(
    () => {
      if (!isReady || !subscription || filter) return;

      subscribe();

      return () => {
        unsubscribe();
      };
    },
    [isReady, subscription, block, id, filter, subscribe, unsubscribe]
  );

  useEffect(
    () => {
      if (isReady && listener && instance) {
        instance.addEventListener('message', onMessage);

        return () => {
          instance.removeEventListener('message', onMessage);
        };
      }
    },
    [isReady, instance, listener, onMessage]
  );

  return {
    data,
    isLoading,
    focusedFields,
    isReady,
    subscribe,
    unsubscribe,
    send,
    update,
    add,
    focus,
    blur,
    connect,
    disconnect
  };
};
