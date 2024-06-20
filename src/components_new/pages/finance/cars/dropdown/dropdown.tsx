import React, { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react'
import * as S from './dropdown.styled';
import { FormProvider, useForm } from 'react-hook-form'

type DropdownProps = {
	dropdownContent: ReactNode,
	dropdownSelect: ReactNode,
	style?: CSSProperties | undefined
}

const Dropdown: FC<DropdownProps> = ({
			 dropdownSelect,
			 dropdownContent,
			 style
																		 }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownContentRef = useRef<HTMLDivElement>(null);
	const dropdownSelectRef = useRef<HTMLDivElement>(null);
	const useFormProps = useForm();

	const closeOpenDropdowns = (e: any) => {
		if(isOpen && !dropdownSelectRef.current?.contains(e.target) && !dropdownContentRef.current?.contains(e.target)){
			setIsOpen(false)
		}
	}

	if(typeof document !== "undefined") {
		document?.addEventListener("mousedown", closeOpenDropdowns)
	}



	return (
		<S.ComboboxWrapper style={style}>
			<S.Combobox ref={dropdownContentRef} isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}>
				<S.ComboboxContent >
					{dropdownContent}
				</S.ComboboxContent>
			</S.Combobox>

			<FormProvider {...useFormProps}>
				<S.ComboboxSelect ref={dropdownSelectRef} isOpen={isOpen}>
					{dropdownSelect}
				</S.ComboboxSelect>
			</FormProvider>
		</S.ComboboxWrapper>
	)
}

export default Dropdown