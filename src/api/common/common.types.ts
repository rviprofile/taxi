export interface UploadFile {
	file: File
	group: string
	counterpartyId: number
}

export interface UploadFileData {
	id: string
	group: string
	name: string
	url: string
	preview?: string
	size: string
}
