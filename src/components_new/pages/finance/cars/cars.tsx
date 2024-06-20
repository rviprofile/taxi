import React, { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { format } from "date-fns";

import { Stats } from '../../../../components/pages/finance/Cars/components'
import CanistrIcon from 'public/icons/canistr.svg';
import ClockIcon from 'public/icons/clock.svg';

import * as S from './cars.styled';
import CarGrid from './car_grid';
import { ROUTE_NAMES } from '../../../../constants/routes'
import API from '../../../../core/axios'
import FinanceCarsService from '../../../../api/finance/cars';

import { CarType } from './car_grid/car_grid'
import { DatePicker } from '../../../../ui'
import StatusDropdown from './dropdown/status_dropdown'
import BrandDropdown from './dropdown/brand_dropdown/brand_dropdown'
import ModelDropdown from './dropdown/model_dropdown/model_dropdown'
import SortDropdown from './dropdown/sort_dropdown/sort_dropdown'

export type FilterResponse = {
		data: FilterData,
		result: number
}

export interface FilterData {
	filter: Filter[]
}

export type Filter = {
	main: boolean
	type: string
	code: string
	name: string
	defaultValue: any
	values: Value[]
}

export interface Value {
	id: string
	style: string
	name: string
	brand: string
	models: Model[]
}

export interface Model {
	id: string
	name: string
}


export type TotalStats = {
	working: number
	waiting: number
	repair: number
	crash: number
}

export type TotalIncome = {
	waited_period_sum: number
	actual_period_sum: number
	waited_average_sum: number
	actual_average_sum: number
};

type CarsResponse = {
	result: number;
	data: {
		cars: CarType[],
		total_income: TotalIncome,
		total_stats: TotalStats
	}
}


const Cars = () => {
	const router = useRouter();

	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ["cars"],
		queryFn: async () => await FinanceCarsService.getCars({
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
	});
	const { data: filterData, isLoading: filterDataIsLoading, isSuccess: filterDataLoadingSuccess } = useQuery({
		queryKey: ["carFilters"],
		queryFn: async () => await API.get<FilterResponse>('/crm/?w=park-report-filter')
	})
	const [codes, setCodes] = useState<{[key: string]: string}>({
		statuses: "",
		brands: "",
		models: "",
		sort: ""
	})
	const [statuses, setStatuses] = useState<(string)[]>([]);
	const [brands, setBrands] = useState<string[]>([]);
	const [models, setModels] = useState<string[]>([]);
	const [sort, setSort] = useState<{name: string, code: string}[]>([]);
	const [isSubmit, setIsSubmit] = useState<boolean>(false);
	const [startDate, setStartDate] = useState<Date | string>(new Date(new Date().setDate(new Date().getDate()-1)));
	const [endDate, setEndDate] = useState<Date | string>(new Date());

	useEffect(() => {

		if(isSubmit) {
			refetch()
			setIsSubmit(false)
		}

	}, [isSubmit])

	// useEffect(() => {
	//
	// 	if(filterDataLoadingSuccess) {
	// 		const defaultStartDate = format(new Date(filterData?.data.data.filter[4]?.defaultValue[0]), "dd/MM/yyyy")
	// 		const defaultEndDate = format(new Date(filterData?.data.data.filter[4]?.defaultValue[1]), "dd/MM/yyyy")
	// 		setStartDate(new Date(defaultStartDate));
	// 		setEndDate(new Date(defaultEndDate));
	// 	}
	// }, [filterDataLoadingSuccess])





	if(!data || !filterData) {
		return <>Loading...</>
	}

	const filterModelsByChosenBrands = () => {
		let filter = filterData?.data.data?.filter[2];


		if(brands.length <= 0) {
			return filter;
		} else {
			let temp = { ...filter, values: filter.values.filter(item => brands.includes(item.brand as string)) }

			return temp;
		}
	}

	const cars = data?.data.data?.cars;
	const stats = data?.data.data?.total_stats;
	const income = data?.data.data?.total_income;

	const statusFilter = filterData?.data.data?.filter[0];
	const brandFilter = filterData?.data.data?.filter[1];
	const modelFilter = filterModelsByChosenBrands();
	const sortFilter = filterData?.data.data?.filter[3];
	const dateFilter = filterData?.data.data?.filter[4];

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

	const onDateChange = (dates: any) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);

		setIsSubmit(true)
	};

	const clearModelsBySpecificBrand = (brand: string) => {
		let filter = filterData?.data.data.filter[2];

		filter.values.filter(item => item.brand == brand)[0].models.forEach(modelToRemove => {
			if(models.includes(modelToRemove.id)) {
				setModels(prevState => prevState.filter(item => item !== modelToRemove.id))
			}
		});
	}

	return (
		<S.CarsWrapper>
			<div style={{ padding: "20px 0"}}>
				<DatePicker
					selected={startDate as Date}
					onChange={onDateChange}
					startDate={startDate as Date}
					endDate={endDate as Date}
					selectsRange
				/>
			</div>
			<S.CarsFormWrapper>
				<S.Links>
					<S.Link isActive={true}>
							<CanistrIcon />
					</S.Link>
					<S.Link onClick={() => router.push(ROUTE_NAMES.FINANCE_CAR_TABLE)}>
						<ClockIcon />
					</S.Link>
				</S.Links>
				<div style={{ display: "grid", width: "100%", gap: "15px", gridTemplateColumns: "repeat(4, 1fr)" }}>
					<StatusDropdown onChange={onStatusChange} selectedData={statuses} filterData={statusFilter} />
					<BrandDropdown onChange={onBrandChange} selectedData={brands} filterData={brandFilter} />
					<ModelDropdown onChange={onModelChange} selectedData={models} filterData={modelFilter} />
					<div style={{ display: "flex", alignItems: 'center' }}>
						<span style={{ marginRight: "15px" }}>Сортировка:</span>
						<SortDropdown style={{ width: "100%" }} filterData={sortFilter} onChange={onSortChange} selectedData={sort} />
					</div>
				</div>
			</S.CarsFormWrapper>
			<Stats totalStats={stats} totalIncome={income} />
			<CarGrid cars={cars} />
		</S.CarsWrapper>
	)
}

export default Cars