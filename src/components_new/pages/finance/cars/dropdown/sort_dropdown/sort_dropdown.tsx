import React, { FC } from 'react'

import { Filter } from '../../cars'
import Dropdown from '../dropdown'
import ArrowDownIcon from 'public/icons/arrow-down-gray.svg'


type StatusDropdownProps = {
	onChange: (option: {name: string, code: string}) => void,
	selectedData: any,
	style?:  React.CSSProperties | undefined,
	filterData: Filter
}

const SortDropdown: FC<StatusDropdownProps> = ({
																									onChange,
																									selectedData,
																									style,
																									filterData
																								}) => {

	const renderDropdownContent = () => {
			if (!selectedData.length) {
					return (
						<>
							<span style={{ marginRight: '2px', color: 'white' }}>{filterData.values[0].name}</span>
							<span style={{ marginLeft: 'auto' }}>{<ArrowDownIcon />}</span>
						</>
					)
			} else {
				return (
					<>
						<span style={{ marginRight: '2px' }}></span>{selectedData.map((sort: {name: string, code: string}, i: number) => {
						return (
							<span style={{ display: 'flex' }} key={i}>
									<span style={{ marginRight: '5px', color: 'white' }}>{sort.name}</span>
									</span>
						)
					})}
						<span style={{ marginLeft: 'auto' }}>{<ArrowDownIcon />}</span>
					</>
				)
			}
	}

	const renderDropdownSelect = () => {
			return filterData.values.map((option, i) => {
				return (
					<div
						key={i}
						onClick={() => onChange({ name: option.name, code: option.id })}
						style={{
							display: 'flex',
							marginBottom: '15px',
							cursor: 'pointer'
						}}
					>
						{option.name}
					</div>
			)
		})
	}


	return (
		<Dropdown
			style={style}
			dropdownContent={
				renderDropdownContent()
			}
			dropdownSelect={
				renderDropdownSelect()
			}
		/>
	)
}

export default SortDropdown;