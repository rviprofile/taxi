import React, { FC, FormEvent } from 'react'

// import * as S from './brand_dropdown.styled';
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

const BrandDropdown: FC<StatusDropdownProps> = ({
																									 onChange,
																									 selectedData,
																									 style,
																									 filterData
																								 }) => {

	const renderDropdownContent = () => {
		if (!selectedData.length) {
			return(
				<>
					<span style={{ marginRight: '2px' }}>{filterData?.name}:</span>
					<span style={{ color: 'white' }}>Все</span>
					<span style={{ marginLeft: 'auto' }}>{<ArrowDownIcon />}</span>
				</>
			)
		} else {
			return (
				<>
					<span style={{ marginRight: '2px' }}>{filterData?.name}:</span>
					<span style={{
						display: 'block',
						whiteSpace: 'nowrap',
						width: '80%',
						maxWidth: '300px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						color: 'white'
					}}>
							{selectedData.map((brand, i) => `${brand}${!(i + 1 >= selectedData.length) ? ',' : ''}`)}
						</span>
					<span style={{ marginLeft: 'auto' }}>{<ArrowDownIcon />}</span>
				</>
			)
		}
	}

	const renderDropdownSelect = () => {
		return filterData.values.map((option, i) => {
			return (
				<>
					<div
						style={{
							display: 'flex',
							marginBottom: '15px'
						}}
					>
						<Checkbox onChange={onChange} name={option.id} label={option.name} />
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

export default BrandDropdown