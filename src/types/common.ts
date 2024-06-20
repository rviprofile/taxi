import { FileWithPath } from 'react-dropzone'

export interface ImageFile extends FileWithPath {
	preview: string | ArrayBuffer | null
	webkitRelativePath: string
}

export interface UploadedFile {
	id: string
	group: string
	name: string
	url: string
	preview?: string
	size: string
	delete?: 1
}

export interface ResponseData<T> {
	data: T
	message?: string
	success: boolean
}

export type FilterType = 'search' | 'dropdown' | 'slider' | 'checkbox'

interface Value {
	style: string
	name: string
}

interface Values {
	[value: string]: Value
}

export interface FilterComponentData {
	type: FilterType
	name: string
	placeholder: string
	code: string
	defaultValue: string | any[]
	main: boolean
	values?: Values | number[]
}
