import API from '../../core/axios'

class AllDriversService {
    getDrivers() {
        let url = 'https://test.taxivoshod.ru/api/crm/?w=book-info'

        return API.get(url)
    }
}

export default new AllDriversService();