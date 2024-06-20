import { FormProvider, useForm } from 'react-hook-form'

import { Heading, MenuButton, SearchField } from 'components/common'
import { Checkbox } from 'ui'

import * as S from './MainSearch.styled'

export const MainSearch = () => {
	const useFormProps = useForm()
	const { watch } = useFormProps

	const searchWatch = watch('search')

	const categories = [
		{ name: 'name1', label: 'Сотрудники' },
		{ name: 'name2', label: 'Свободные автомобили' },
		{ name: 'name3', label: 'Автомобили' },
		{ name: 'name4', label: 'Должники' },
		{ name: 'name5', label: 'Автомобили' },
		{ name: 'name6', label: 'Сотрудники' },
		{ name: 'name7', label: 'Свободные автомобили' },
		{ name: 'name8', label: 'Должники' },
		{ name: 'name9', label: 'Сотрудники' },
		{ name: 'name10', label: 'Свободные автомобили' },
		{ name: 'name11', label: 'Автомобили' }
	]

	const employees = [
		{ name: 'name1', label: 'Александров И. И.' },
		{ name: 'name2', label: 'Михаилов А. И.' },
		{ name: 'name3', label: 'Владиславов С. Т.' },
		{ name: 'name4', label: 'Владиславов С. Т.' },
		{ name: 'name5', label: 'Владиславов С. Т.' },
		{ name: 'name6', label: 'Александров И. И.' },
		{ name: 'name7', label: 'Владиславов С. Т.' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.MainSearch>
				<S.SearchFieldContainer active={Boolean(searchWatch)}>
					<SearchField name="search" placeholder="Введите запрос поиск" />
				</S.SearchFieldContainer>

				{searchWatch?.length ? (
					<S.SearchContainer>
						<S.SearchCategory>
							<Heading
								variant="body1"
								endAdornment={<S.ResultsAmount>10 результатов</S.ResultsAmount>}
							>
								Искать в
							</Heading>

							<S.OptionsList>
								{categories.map(({ name, label }) => {
									return (
										<li key={name}>
											<S.CategoryCheckbox
												control={<Checkbox name={name} />}
												label={label}
												active={watch(name)}
											/>
										</li>
									)
								})}
							</S.OptionsList>
						</S.SearchCategory>

						<S.SearchCategory>
							<Heading
								variant="body1"
								endAdornment={<S.ResultsAmount>10 результатов</S.ResultsAmount>}
							>
								Сотрудники
							</Heading>

							<S.OptionsList>
								{employees.map(({ name, label }) => {
									return (
										<li key={name}>
											<S.OptionLink href="/">{label}</S.OptionLink>
										</li>
									)
								})}
							</S.OptionsList>
						</S.SearchCategory>

						<S.SearchCategory>
							<Heading
								variant="body1"
								endAdornment={<S.ResultsAmount>7 результатов</S.ResultsAmount>}
							>
								Автомобили
							</Heading>

							<S.OptionsList>
								{employees.map(({ name, label }) => {
									return (
										<li key={name}>
											<S.OptionLink href="/">{label}</S.OptionLink>
										</li>
									)
								})}
							</S.OptionsList>
						</S.SearchCategory>

						<S.SearchCategory>
							<Heading
								variant="body1"
								endAdornment={<S.ResultsAmount>10 результатов</S.ResultsAmount>}
							>
								Сотрудники
							</Heading>

							<S.OptionsList>
								{employees.map(({ name, label }) => {
									return (
										<li key={name}>
											<S.OptionLink href="/">{label}</S.OptionLink>
										</li>
									)
								})}
							</S.OptionsList>
						</S.SearchCategory>

						<S.SearchCategory>
							<Heading
								variant="body1"
								divider={false}
								endAdornment={<S.ResultsAmount>&#60;200 результатов</S.ResultsAmount>}
							>
								<MenuButton open={false} arrowPlacement="left">
									Показать больше
								</MenuButton>
							</Heading>
						</S.SearchCategory>
					</S.SearchContainer>
				) : null}
			</S.MainSearch>
		</FormProvider>
	)
}
