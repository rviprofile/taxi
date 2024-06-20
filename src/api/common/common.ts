import { API } from 'core/axios'

import { UploadFile, UploadFileData } from './common.types'
import { ResponseData } from 'types/common'

export const uploadFile = async ({ file, group, counterpartyId }: UploadFile) => {
	const formData = new FormData()

	formData.append('file', file)
	formData.append('group', group)
	formData.append('contragent', String(counterpartyId))

	const { data } = await API.post<ResponseData<UploadFileData>>('/upload.php', formData)

	if (data.success) {
		return data
	}

	throw new Error(data?.message)
}
