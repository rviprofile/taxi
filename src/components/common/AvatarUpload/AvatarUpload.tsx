import { useState } from 'react'
import Image from 'next/image'

import { Button, Dropzone } from 'ui'

import { UploadedFile } from 'types/common'

import * as S from './AvatarUpload.styled'

import PlusIcon from 'public/icons/plus.svg'

interface AvatarUploadProps {
	images?: UploadedFile[]
	icon: React.ReactNode
	onlyView?: boolean
	onFileAdd: (file: File, group: string) => void
	onFileRemove: (id: string) => void
}

export const AvatarUpload = ({
	icon,
	images = [],
	onlyView = false,
	onFileAdd,
	onFileRemove
}: AvatarUploadProps) => {
	const [isModalOpen, setModalOpen] = useState(false)

	const mainPhoto = images.length ? images[0] : null

	return (
		<S.AvatarUpload>
			<S.MainPhoto>
				{mainPhoto ? (
					<Image src={mainPhoto.url} width={140} height={140} alt={mainPhoto.name} />
				) : (
					icon
				)}
			</S.MainPhoto>

			{!onlyView ? (
				<Button
					color="blue"
					onClick={() => {
						setModalOpen(true)
					}}
				>
					<PlusIcon width={20} height={20} viewBox="0 0 17 17" />
				</Button>
			) : null}

			<S.UploadAvatarModal
				open={isModalOpen}
				heading="Прикрепление фото"
				onClose={() => {
					setModalOpen(false)
				}}
			>
				<Dropzone
					type="images"
					group="main"
					files={images}
					onFileAdd={onFileAdd}
					onFileRemove={onFileRemove}
				/>
			</S.UploadAvatarModal>
		</S.AvatarUpload>
	)
}
