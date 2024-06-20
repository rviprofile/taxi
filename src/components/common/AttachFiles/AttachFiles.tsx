import { MouseEvent, useState } from 'react'

import { Dropzone } from 'ui'

import { UploadedFile } from 'types/common'

import * as S from './AttachFiles.styled'

import DownloadIcon from 'public/icons/download.svg'
import FolderAddIcon from 'public/icons/folder-add.svg'

interface AttachFilesProps {
	group: string
	type: 'images' | 'documents'
	heading: [string, string]
	files?: UploadedFile[]
	disabled?: boolean
	onFileAdd: (file: File, group: string) => void
	onFileRemove: (id: string) => void
}

export const AttachFiles = ({
	group,
	type,
	heading,
	files = [],
	disabled = false,
	onFileAdd,
	onFileRemove
}: AttachFilesProps) => {
	const [isModalOpen, setModalOpen] = useState(false)

	const haveFiles = Boolean(files.length)

	return (
		<S.AttachFiles>
			<S.UploadButton
				disabled={disabled}
				type="button"
				onClick={(e) => {
					if (disabled) return

					e.stopPropagation()
					setModalOpen(true)
				}}
			>
				{files.length ? <FolderAddIcon /> : <DownloadIcon />}
			</S.UploadButton>

			<S.AttachFilesModal
				heading={haveFiles ? heading[1] : heading[0]}
				short={haveFiles}
				open={isModalOpen}
				onClose={(e) => {
					const event = e as MouseEvent<HTMLButtonElement, MouseEvent>
					event.stopPropagation()
					setModalOpen(false)
				}}
			>
				<Dropzone
					group={group}
					type={type}
					files={files}
					onFileAdd={onFileAdd}
					onFileRemove={onFileRemove}
				/>
			</S.AttachFilesModal>
		</S.AttachFiles>
	)
}
