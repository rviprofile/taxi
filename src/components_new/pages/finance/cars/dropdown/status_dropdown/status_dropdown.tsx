import React, { FC, FormEvent } from 'react'

import * as S from './status_dropdown.styled';
import { Filter } from '../../cars'
import Dropdown from '../dropdown'
import ArrowDownIcon from 'public/icons/arrow-down-gray.svg'
import { Checkbox } from '../../../../../../ui'


type StatusDropdownProps = {
	onChange: (e: FormEvent<HTMLInputElement>) => void,
	selectedData: string[],
	style?:  React.CSSProperties | undefined,
	filterData: Filter
}

const StatusDropdown: FC<StatusDropdownProps> = ({
	onChange,
	selectedData,
	style,
	filterData
																								 }) => {

	 const returnColorDependedToStatus = (status: string) => {
		switch(status) {
			case "waiting":
				return "yellow";
			case "crash":
				return "red";
			case "working":
				return "green";
			case "repair":
				return "orange";
			default:
				return "";
		}
	}

	const returnTextDependedToStatus = (status: string) => {
		switch(status) {
			case "waiting":
				return "Ожидает";
			case "crash":
				return "ДТП";
			case "working":
				return "Работает";
			case "repair":
				return "Ремонт";
		}
	}

	const renderDropdownContent = () => {
		if(filterData.code === "status") {
			if(!selectedData.length) {
				return (
					<>
						<span style={{ marginRight: '2px' }}>{filterData.name}:</span>
						<span style={{ color: 'white' }}>Все</span>
						<span style={{ marginLeft: 'auto' }}>{<ArrowDownIcon />}</span>
					</>
				)
			} else {
				return (
					<>
						<span style={{ marginRight: '2px' }}>{filterData.name}:</span>
						{selectedData.map((id, i) => {
							return (
								<span style={{ display: 'flex' }} key={i}>
									<S.DotWrapper
										color={returnColorDependedToStatus(id)}
										style={{ marginRight: '1px' }}
									>
											<span></span>
										</S.DotWrapper>
									<span style={{ color: 'white' }}>{returnTextDependedToStatus(id)}</span>
								</span>
							)
						})}
						<span style={{ marginLeft: 'auto' }}>{<ArrowDownIcon />}</span>
					</>
				)
			}
		}
	}

	const renderDropdownSelect = () => {
			return filterData.values.map((option, i ) => {
				return (
					<>
						<div
							style={{
								display: "flex",
								marginBottom: "15px",
							}}
						>
							<Checkbox onChange={onChange} name={option.id} label={option.name} />
							<S.DotWrapper
								color={
									returnColorDependedToStatus(option.id)
								}
								style={{ marginLeft: "auto"}}>
								<span></span>
							</S.DotWrapper>
						</div>
					</>
				)
			})
	}

	return (
		<Dropdown
			dropdownContent={
				renderDropdownContent()
			}
			dropdownSelect={
				renderDropdownSelect()
			}
		/>
	)
}

export default StatusDropdown