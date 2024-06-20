export const replaceIdPathname = (path: string, id?: string) => {
	if (path.includes('[id]') && id) {
		return path.replace('[id]', id)
	}

	return path
}
