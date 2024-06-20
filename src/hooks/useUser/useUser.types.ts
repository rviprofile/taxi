export interface UserRaw {
	fname: string
	mname: string
	lname: string
}

export interface User {
	firstName: string
	middleName: string
	lastName: string
}

export interface UserContextProps {
	user: User
	isUserLoading: boolean
}
