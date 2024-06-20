interface FullName {
	firstName: string
	middleName: string
	lastName: string
}

interface FormatFullNameProps extends FullName {
	short?: boolean
}

const formatShortFullName = ({ firstName, middleName, lastName }: FullName) => {
	if (lastName && middleName && firstName) {
		return `${lastName} ${firstName[0]}.${middleName[0]}.`
	}

	if (lastName && middleName) {
		return `${lastName} ${middleName[0]}.`
	}

	if (lastName && firstName) {
		return `${lastName} ${firstName[0]}.`
	}

	return lastName
}

export const formatFullName = ({
	firstName,
	middleName,
	lastName,
	short = false
}: FormatFullNameProps) => {
	if (short) {
		return formatShortFullName({ firstName, middleName, lastName })
	}

	return [lastName, firstName, middleName].filter((name) => name).join(' ')
}
