import API from '../../core/axios'

export interface Root {
	result: number
	data: Data
	list: List | undefined[][]
	config: Config[]
}

export interface Data {
	page: number
	pages_total: number
	total: number
	total_stats: TotalStats
	total_income: TotalIncome
}

export interface TotalStats {
	total: number
	working: number
	waiting: number
	repair: number
	crash: number
}

export interface TotalIncome {
	plan: number
	fact: number
	debt: number
}

export interface List {
	value: any
	id?: number
	style?: string
	phone?: string
}

export interface Config {
	type: string
	name: string
}

type GetCarsArgs = {
	codes: {[key: string]: string},
	statuses: string[],
	brands: string[],
	models: string[],
	sort: { name: string; code: string; }[],
	dates: { from: Date | string, to: Date | string}
}

type GetCarsTableArgs = {
	page: number
} & GetCarsArgs


class FinanceCarsService {

	getCars({ codes, statuses, brands, models, sort, dates }:
						{ codes: {[key: string]: string},
							statuses: string[],
							brands: string[],
							models: string[],
							sort: { name: string; code: string; }[],
							dates: { from: Date | string, to: Date | string}
	}) {

		let url = '/crm/?w=park-report';

		if(dates.from) {
			url += `&from=${dates.from}`
		}

		if(dates.to) {
			url += `&to=${dates.to}`
		}


		statuses.map(status => url = url + `&${codes.statuses}[]=${status}`);
		brands.map(brand => url = url + `&${codes.brands}[]=${brand}`);
		models.map(model => url = url + `&${codes.models}[]=${model}`);
		sort.map(sort => url = url + `&${codes.sort}=${sort.code}`);

		return API.get(url)
	}


	getCarsTable({ page = 1, codes, statuses, brands, models, sort, dates }: GetCarsTableArgs) {

		let url = `/crm/?w=park-report2&page=${page}`;

		if(dates.from) {
			url += `&from=${dates.from}`
		}

		if(dates.to) {
			url += `&to=${dates.to}`
		}


		statuses.map(status => url = url + `&${codes.statuses}[]=${status}`);
		brands.map(brand => url = url + `&${codes.brands}[]=${brand}`);
		models.map(model => url = url + `&${codes.models}[]=${model}`);
		sort.map(sort => url = url + `&${codes.sort}=${sort.code}`);

		return API.get(url)
	}

	comment(text: string, id: number) {
		let url = `/crm/?w=quick-comment&id=${id}&value=${text}`

		return API.get(url)
	}

	getBlockCarInfo(id: number) {
		let url = `/crm/?w=block-info&id=${id}`

		return API.get(url);
	}

	blockCar(id: number) {
		let url = `/crm/?w=block-car&id=${id}`

		return API.get(url)
	}
}

export default new FinanceCarsService();