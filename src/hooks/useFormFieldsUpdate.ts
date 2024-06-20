import { FocusEvent, RefObject, useEffect } from 'react'

interface useFormFieldsUpdateProps {
	formRef: RefObject<HTMLFormElement>
	focusedFields: string[]
	onFocus: (fieldName: string) => void
	onBlur: (fieldName: string) => void
	onUpdate: () => void
}

export const useFormFieldsUpdate = ({
	formRef,
	focusedFields,
	onFocus,
	onBlur,
	onUpdate
}: useFormFieldsUpdateProps) => {
	const disableField = (field: HTMLInputElement | HTMLTextAreaElement) => {
		field.readOnly = true

		if (field.tagName === 'INPUT') {
			field.parentElement?.classList.add('disabled')
		}

		if (field.tagName === 'TEXTAREA') {
			field.classList.add('disabled')
		}
	}

	const undisableField = (field: HTMLInputElement | HTMLTextAreaElement) => {
		field.readOnly = false

		if (field.tagName === 'INPUT') {
			field.parentElement?.classList.remove('disabled')
		}

		if (field.tagName === 'TEXTAREA') {
			field.classList.remove('disabled')
		}
	}

	useEffect(() => {
		if (!formRef.current) return

		const allInputs = formRef.current.querySelectorAll('input, textarea') as NodeListOf<
			HTMLInputElement | HTMLTextAreaElement
		>

		allInputs.forEach((input) => {
			const isFocused = focusedFields.includes(input.name)

			if (isFocused) {
				disableField(input)
			} else {
				undisableField(input)
			}
		})
	}, [formRef, focusedFields])

	const onFormFocus = ({ target }: FocusEvent<HTMLFormElement, Element>) => {
		const { tagName, name } = target

		const isSelect = target?.classList?.contains('MuiSelect-select')

		if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
			onFocus(name)
		}

		if (!focusedFields.includes(name)) {
			target.readOnly = false
		}

		if (isSelect) {
			onUpdate()
		}
	}

	const onFormBlur = ({ target }: FocusEvent<HTMLFormElement, Element>) => {
		const { tagName, name } = target

		if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
			onBlur(name)
			onUpdate()
		}
	}

	return {
		onFormFocus,
		onFormBlur
	}
}
