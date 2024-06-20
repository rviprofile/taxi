export const formatBytes = (bytes: number, decimals: number = 0) => {
	if (bytes == 0) return '0 Б'

	const k = 1024
	const sizes = ['Б', 'КБ', 'МБ']
	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i]
}
