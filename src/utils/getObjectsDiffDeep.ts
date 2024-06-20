interface Obj {
	[key: string]: any
}

export const getObjectsDiffDeep = (obj1: Obj, obj2: Obj): Obj => {
	if (Array.isArray(obj2)) {
		return obj2
	}

	const diffObj: Obj = {}

	Object.getOwnPropertyNames(obj2).forEach(function (prop) {
		if (typeof obj2[prop] === 'object') {
			diffObj[prop] = getObjectsDiffDeep(obj1[prop], obj2[prop])

			if (
				Object.getOwnPropertyNames(diffObj[prop]).length === 1 ||
				Object.getOwnPropertyNames(diffObj[prop]).length === 0
			) {
				delete diffObj[prop]
			}
		} else if (obj1[prop] !== obj2[prop]) {
			diffObj[prop] = obj2[prop]
		}
	})

	return diffObj
}
