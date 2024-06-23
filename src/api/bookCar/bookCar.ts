import API from '../../core/axios'

class BookCarService {
	bookingCar({
		isExist,
		carId,
		date,
		deposit,
		driverId,
		driverName,
		driverLicense,
		phone
	}: {
		isExist: boolean
		carId: number
		date: string
		deposit: string
		driverId: number | undefined
		driverName?: string
		driverLicense?: string
		phone?: string
	}) {
		let url = ''
		if (isExist) {
			url = `https://test.taxivoshod.ru/api/crm/?w=book&car_id=${carId}&date=${date}&deposit=${deposit}&driver_id=${driverId}`
		} else {
			url = `https://test.taxivoshod.ru/api/crm/?w=book&car_id=${carId}&date=${date}&deposit=${deposit}&driver_name=${driverName}&driver_phone=${phone}${
				driverLicense ? `&driver_license=${driverLicense}` : ''
			}`
		}

		return API.get(url)
	}
}

export default new BookCarService()
