import axios from 'axios'

export const getMenu = async () => {
	const { data } = await axios.get('https://test.taxivoshod.ru/api/crm/?w=menu')

	return data
}
