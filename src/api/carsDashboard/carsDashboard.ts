import API from '../../core/axios'

class CarsDashboard {
	getCarsDashboard({ page }: { page: number }) {
		let url = 'https://test.taxivoshod.ru/api/crm/?w=dashboard-free'
		if (page > 1) {
			url = `https://test.taxivoshod.ru/api/crm/?w=dashboard-free&page=${page}`
		}

		return API.get(url)
	}
}

export default new CarsDashboard()
