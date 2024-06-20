import API from '../../core/axios'

class MenuService {
    getMenu() {
        let url = 'https://test.taxivoshod.ru/api/crm/?w=menu'

        return API.get(url)
    }
}

export default new MenuService();