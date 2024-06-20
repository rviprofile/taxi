import React, { FormEvent, useEffect, useState } from 'react'

import LockIcon from 'public/icons/lock.svg';
import ClosedLockIcon from 'public/icons/closed_lock.svg';
import CanistrIcon from 'public/icons/canistr.svg';
import CheckmarkIcon from 'public/icons/checkmark.svg';
import ClockIcon from 'public/icons/clock.svg';
import * as S from './car-table.styled';
import { useRouter } from 'next/router'
import { ROUTE_NAMES } from '../../../../constants/routes'
import { Checkbox, DatePicker } from '../../../../ui'
import StatusDropdown from '../cars/dropdown/status_dropdown'
import BrandDropdown from '../cars/dropdown/brand_dropdown/brand_dropdown'
import ModelDropdown from '../cars/dropdown/model_dropdown/model_dropdown'
import SortDropdown from '../cars/dropdown/sort_dropdown/sort_dropdown'
import { FormProvider, useForm } from 'react-hook-form'
import { Pagination } from '../../../../components/common'
import CarStats from './components/car_stats/car_stats'
import FinanceStats from './components/finance_stats'
import CarMessageInput from './components/car-message-input'
import { useQuery } from '@tanstack/react-query'
import API from '../../../../core/axios'
import { FilterResponse } from '../cars/cars'
import FinanceCarsService, { Config } from '../../../../api/finance/cars'
import { format } from 'date-fns'
import BlockCarModal from './components/block-car-modal'


const CarTable = () => {
	const router = useRouter();

	const [codes, setCodes] = useState<{[key: string]: string}>({
		statuses: "",
		brands: "",
		models: "",
		sort: ""
	})

	const { data: filterData, isLoading: filterDataIsLoading, isSuccess: filterDataLoadingSuccess } = useQuery({
		queryKey: ["carFilters2"],
		queryFn: async () => await API.get<FilterResponse>('/crm/?w=park-report2-filter')
	})

	const { data: carReports, isLoading: isCarReportLoading, isSuccess: isCarReportSuccess, refetch: refetchCarReports } = useQuery({
		queryKey: [],
		queryFn: async () => await FinanceCarsService.getCarsTable({
			page,
			codes,
			statuses,
			brands,
			sort,
			models,
			dates: {
				from: format(startDate as Date, "dd.MM.yyyy"),
				to: format(endDate as Date, "dd.MM.yyyy")
			}
		})
	})

	const [statuses, setStatuses] = useState<(string)[]>([]);
	const [brands, setBrands] = useState<string[]>([]);
	const [models, setModels] = useState<string[]>([]);
	const [sort, setSort] = useState<{name: string, code: string}[]>([]);
	const [isSubmit, setIsSubmit] = useState<boolean>(false);
	const [startDate, setStartDate] = useState<Date | string>(new Date(new Date().setDate(new Date().getDate()-1)));
	const [endDate, setEndDate] = useState<Date | string>(new Date());
	const [page, setPage] = useState<number>(carReports?.data.data.page);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [currentModalId, setCurrentModalId] = useState<number | null>(null)
	const useFormProps = useForm();


	useEffect(() => {
		if(isSubmit) {
			refetchCarReports()
			setIsSubmit(false)
		}
	}, [isSubmit])

	useEffect(() => {
			setPage(carReports?.data.data.page)

	}, [carReports?.data.data.page])

	const filterModelsByChosenBrands = () => {
		let filter = filterData?.data.data?.filter[2];


		if(brands.length <= 0) {
			return filter;
		} else {
			let temp = { ...filter, values: filter.values.filter(item => brands.includes(item.brand as string)) }

			return temp;
		}
	}

	if(!filterData || !carReports) {
		return <>Loading...</>
	}


	const statusFilter = filterData?.data.data?.filter[0];
	const brandFilter = filterData?.data.data?.filter[1];
	const modelFilter = filterModelsByChosenBrands();
	const sortFilter = filterData?.data.data?.filter[3];
	const dateFilter = filterData?.data.data?.filter[4];

	const onDateChange = (dates: any) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const onStatusChange = (e: FormEvent<HTMLInputElement> | any) => {
		const isChecked = e.target?.checked
		const name = e.target?.name

		setCodes(prevState => prevState = {...prevState, statuses: statusFilter.code })

		if(!isChecked) {
			setStatuses(prevState => prevState.filter(item => item !== name))
		}

		if(isChecked) {
			setStatuses(prevState => [...prevState, name] )
		}

		setIsSubmit(true)
	}

	const onBrandChange = (e: FormEvent<HTMLInputElement> | any) => {
		const isChecked = e.target?.checked
		const name = e.target?.name


		setCodes(prevState => prevState = {...prevState, brands: brandFilter.code })

		if(!isChecked) {
			setBrands(prevState => prevState.filter(item => item !== name))

			clearModelsBySpecificBrand(name)
		}

		if(isChecked) {
			setBrands(prevState => [...prevState, name] )
		}

		setIsSubmit(true)
	}

	const onModelChange = (e: FormEvent<HTMLInputElement> | any) => {
		const isChecked = e.target?.checked;
		const name = e.target?.name;
		const modelsValues = filterData?.data.data.filter[2].values;


		const brands = brandFilter.values.map(brand => brand.id)

		setCodes(prevState => prevState = {...prevState, models: modelFilter.code })

		if(!isChecked) {

			if(brands.includes(name)) {
				modelsValues.forEach(model => {
					if(model.brand === name) {
						model.models.forEach((m: any) => {
							setModels(prevState => [...prevState.filter(i => i !== m.id)])
						})
					}
				})
			}

			setModels(prevState => prevState.filter(item => item !== name))
		}

		if(isChecked) {

			if(brands.includes(name)) {
				modelsValues.forEach(model => {
					if(model.brand === name) {
						setModels(prevState => [...prevState, ...model.models.map((m: any) => m.id)] )
					}
				})
			}

			setModels(prevState => [...prevState, name] )
		}

		setIsSubmit(true)
	}

	const onSortChange = (option: { name: string, code: string }) => {
		if(option === sort[0]) return;

		setCodes(prevState =>  prevState = {...prevState, sort: sortFilter.code })

		setSort(_ => [option])

		setIsSubmit(true)
	}

	const clearModelsBySpecificBrand = (brand: string) => {
		let filter = filterData?.data.data.filter[2];

		filter.values.filter(item => item.brand == brand)[0].models.forEach(modelToRemove => {
			if(models.includes(modelToRemove.id)) {
				setModels(prevState => prevState.filter(item => item !== modelToRemove.id))
			}
		});
	}

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


	const returnConfigBasedOnItemIndex = (itemIndex: number) => {
			return carReports?.data.config[itemIndex]
	}


	const returnElementBasedOnConfig = (config: Config, field?: any) => {
		switch(config?.type) {
			case "money" || "integer" || "string" || "driver" || "carnumber" || "car":
				return <div>{field?.value}</div>
			case "dotstring":
				return <div>{field?.value}</div>
			case "comment":
				return  <TableCommentInput func={refetchCarReports} text={field?.value} id={field?.id} />
			case "locked":
				return field?.value ? <div><ClosedLockIcon /></div> : <div><LockIcon onClick={() => {
					setCurrentModalId(field.id as number)
					setIsModalOpen(true)
				}}/></div>
			default:
				return <div>{field?.value}</div> || <div></div>
		}
	}




	const returnHeaderElementBasesOnConfig = (config: Config, i: number) => {
		switch(config?.type) {
			case "locked":
				return <div key={i}> </div>
			default:
				return <div key={i}>{config.name}</div>
		}
	}

	return (
			<S.CarTablePage>
				<S.AnaliticBlock>
					<CarStats {...carReports?.data.data.total_stats} />
					<FinanceStats {...carReports?.data.data.total_income} />
					<CarMessageInput />
				</S.AnaliticBlock>
				<S.CarFormWrapper>
					<S.Links>
						<S.Link onClick={() => router.push(ROUTE_NAMES.FINANCE_CARS)}>
							<CanistrIcon />
						</S.Link>
						<S.Link isActive={true}>
							<ClockIcon />
						</S.Link>
					</S.Links>
						<div style={{ marginRight: "15px", display: "flex", alignItems: "center"}}>
							<DatePicker
								selected={startDate as Date}
								onChange={onDateChange}
								startDate={startDate as Date}
								endDate={endDate as Date}
								selectsRange
							/>
						</div>
					<div style={{ display: "grid", width: "100%", gap: "15px", gridTemplateColumns: "repeat(4, 1fr)" }}>
						<StatusDropdown onChange={onStatusChange} selectedData={statuses} filterData={statusFilter} />
						<BrandDropdown onChange={onBrandChange} selectedData={brands} filterData={brandFilter} />
						<ModelDropdown onChange={onModelChange} selectedData={models} filterData={modelFilter} />
						<div style={{ display: "flex", alignItems: 'center' }}>
							<span style={{ marginRight: "15px" }}>Сортировка:</span>
							<SortDropdown style={{ width: "100%" }} filterData={sortFilter} onChange={onSortChange} selectedData={sort} />
						</div>
					</div>
				</S.CarFormWrapper>

					<S.TableWrapper>
						<FormProvider {...useFormProps}>
						<S.TableHeader>
							{carReports?.data.config.map((item, i) => returnHeaderElementBasesOnConfig(item, i))}
								<div>
									<Checkbox  name={"test"} />
								</div>
						</S.TableHeader>
						<S.TableBody>
							{carReports?.data.list.map((carItem, carItemIndex) => {
								return (
									<S.TableItem key={carItemIndex}>
										{carItem.map((field: any, fieldIndex: number) => {
											return returnElementBasedOnConfig(
												returnConfigBasedOnItemIndex(fieldIndex) as Config,
												field
											)
										})}
										<div>
											<Checkbox name={'test'} />
										</div>
									</S.TableItem>
								)
							})}
						</S.TableBody>
							<S.TableFooter>
							<Pagination
								page={page}
								pageCount={carReports.data.data.pages_total}
								isLoading={isCarReportLoading}
								onNext={() => {
									setPage(prevState => prevState + 1)
									setIsSubmit(true)
								}}
								onPrev={() => {
									setIsSubmit(true)
									setPage(prevState => prevState - 1)
								}}
								onFirst={() => {
									setIsSubmit(true)
									setPage(1)
								}}
								onLast={() => {
									setIsSubmit(true)
									setPage(carReports.data.data.pages_total)
								}}
							/>
						</S.TableFooter>
						</FormProvider>
					</S.TableWrapper>
				<BlockCarModal onClickFunc={refetchCarReports} open={isModalOpen} id={currentModalId as number} closeFunc={() => setIsModalOpen(false)} />
			</S.CarTablePage>
	)
}

const TableCommentInput = ({text, id, func}: {text: string, id: number, func: () => void}) => {

	const [isInputShow, setIsInputShow] = useState<boolean>(false)
	const [inputText, setInputText] = useState(text  || "")
	const [isSubmit, setIsSubmit] = useState<boolean>(false);

	const { refetch, isFetching } = useQuery({
		queryKey: ["carComment"],
		enabled: false,
		queryFn: async () => await FinanceCarsService.comment(inputText, id)
	})

	const onClick = () => {
		if(text !== inputText) {
				refetch()
				func()
		}

		setIsInputShow(false)
	}

	return <div style={{ cursor: "pointer"}} >
		{
			isInputShow ? (
				<S.TableItemInputWrapper>
					<input disabled={isFetching} autoFocus={isInputShow} type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
					<CheckmarkIcon onClick={onClick} />
				</S.TableItemInputWrapper>
			) : (
				<div onClick={() => setIsInputShow(true)}>{!text ? 'Нет' : text}</div>
			)
		}
	</div>
}


export default CarTable