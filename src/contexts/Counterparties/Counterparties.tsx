import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { Toast } from 'components/common'

import { useWS } from 'hooks'
import { commonAPI } from 'api'
import { CounterpartiesContextProps, Counterparty } from './Counterparties.types'
import { UploadedFile } from 'types/common'

export const CounterpartiesContext = createContext({} as CounterpartiesContextProps)

export const useCounterparties = () => {
	return useContext(CounterpartiesContext)
}

export const CounterpartiesProvider = ({
	children
}: {
	children: ReactNode
}): JSX.Element => {
	const router = useRouter()

	const counterpartyId = router.query.id as string // 4549
	const block = 'contragent'

	const {
		data: counterparty,
		isLoading,
		focusedFields,
		update,
		focus,
		blur,
		send
	} = useWS<Counterparty>({
		block,
		id: counterpartyId,
		transformRaw: (data) => ({
			...data,
			additionalContacts: []
		})
	})

	const uploadFile = useMutation({
		mutationFn: commonAPI.uploadFile,
		onError: (error) => {
			toast(
				<Toast
					type="error"
					//@ts-ignore
					title={error?.message}
				/>
			)
		},
		onSuccess: ({ data }) => {
			if (files) {
				setFiles([...files, data])
			}
		}
	})

	const [files, setFiles] = useState<UploadedFile[]>([])

	useEffect(() => {
		if (counterparty?.files) {
			setFiles(counterparty.files)
		}
	}, [counterparty])

	const addFile = (file: File, group: string) => {
		uploadFile.mutate({ file, group, counterpartyId: 4549 })
	}

	const removeFile = (fileId: string) => {
		const filesWithDeleted = files.map((file) => {
			if (file.id === fileId) {
				return { ...file, delete: 1 as const }
			}

			return file
		})

		send({
			command: 'update',
			block,
			id: counterpartyId,
			data: {
				files: filesWithDeleted
			}
		})

		setFiles(filesWithDeleted)
	}

	const getFilesByGroup = (group: string, files: UploadedFile[]) => {
		return files.filter((file) => file.group === group && !Boolean(file.delete))
	}

	const mainImages = getFilesByGroup('main', files)
	const passportDocuments = getFilesByGroup('passport', files)
	const drivingLicenseDocuments = getFilesByGroup('drivingLicense', files)
	const kisiartDocuments = getFilesByGroup('kisiart', files)
	const documents = getFilesByGroup('documents', files)

	const value = {
		counterparty,
		files: {
			main: mainImages,
			passport: passportDocuments,
			drivingLicense: drivingLicenseDocuments,
			kisiart: kisiartDocuments,
			documents
		},
		isCounterpartyLoading: isLoading,
		focusedFields,
		update,
		focus,
		blur,
		addFile,
		removeFile
	}

	return (
		<CounterpartiesContext.Provider value={value}>
			{children}
		</CounterpartiesContext.Provider>
	)
}
