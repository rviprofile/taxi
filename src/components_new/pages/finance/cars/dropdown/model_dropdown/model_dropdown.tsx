import React, { FC, FormEvent } from 'react'

import { Filter } from '../../cars'
import Dropdown from '../dropdown'
import ArrowDownIcon from 'public/icons/arrow-down-gray.svg'
import { Checkbox } from '../../../../../../ui'
import * as S from '../car_combobox/car_combobox.styled'


type StatusDropdownProps = {
	onChange: (e: FormEvent<HTMLInputElement>) => void,
	selectedData: string[],
	style?:  React.CSSProperties | undefined,
	filterData: Filter
}

const ModelDropdown: FC<StatusDropdownProps> = ({
																									onChange,
																									selectedData,
																									style,
																									filterData
																								}) => {

	const renderDropdownContent = () => {
		if (!selectedData.length) {
			return (
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
			return (
					<div style={{ display: "flex", flexWrap: "wrap"}}>

						{filterData.values.map((option, i) => {
							return (
								<div key={i} style={{ minWidth: '50%', marginBottom: '15px' }}>

									<div style={{
										fontWeight: '500',
										color: 'rgba(115, 125, 137, 1)',
										marginBottom: '15px'
									}}>{option.brand}</div>

									<div key={i} style={{ marginBottom: '15px' }}>
										<Checkbox onChange={onChange} name={option.brand as string} label={`Все ${option?.brand}`} />
									</div>

									{option.models?.map((model: any, i: number) => {
										return (
											<div key={i} style={{ marginBottom: '15px' }}>
												<Checkbox onChange={onChange} name={model.id} label={model.name} />
											</div>
										)
									})}

								</div>
							)
						})}
					</div>
			)
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

export default ModelDropdown;