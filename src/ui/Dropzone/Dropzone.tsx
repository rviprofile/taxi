import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ReactSortable, ReactSortableProps } from 'react-sortablejs'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'ui'

import { formatBytes } from 'utils'
import { UploadedFile } from 'types/common'

import * as S from './Dropzone.styled'

import DropzoneSVG from 'public/icons/dropzone.svg'
import ImageIcon from 'public/icons/image.svg'
import UploadIcon from 'public/icons/upload.svg'
import CrossIcon from 'public/icons/cross.svg'
import FilePlusIcon from 'public/icons/file-plus.svg'
import FilePlusBigIcon from 'public/icons/file-plus-big.svg'
import FileGrayIcon from 'public/icons/file-gray.svg'
import MoveIcon from 'public/icons/move.svg'

interface DropzoneProps {
	group: string
	type: 'images' | 'documents'
	files: UploadedFile[]
	onFileAdd: (file: File, group: string) => void
	onFileRemove: (id: string) => void
}

export const Dropzone = ({
	group,
	type,
	files,
	onFileAdd,
	onFileRemove
}: DropzoneProps) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)

				reader.onload = () => {
					onFileAdd(file, group)
				}

				reader.onabort = () => console.log('file reading was aborted')
				reader.onerror = () => console.log('file reading has failed')
			})
		},
		[group, onFileAdd]
	)

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		accept:
			type === 'images'
				? {
						'image/*': []
				  }
				: undefined,
		noClick: true,
		noKeyboard: true,
		multiple: false,
		maxFiles: 15,
		maxSize: 67_108_864 // 64mb
	})

	const [sortedImages, setSortedImages] = useState(files.filter((item) => item.preview))

	useEffect(() => {
		setSortedImages(files.filter((item) => item.preview))
	}, [files])

	const sortableProps: ReactSortableProps<UploadedFile> = {
		list: sortedImages,
		setList: setSortedImages,
		tag: S.ImagePreviewSortableList,
		easing: 'ease-out',
		animation: 300,
		scroll: true,
		scrollSensitivity: 100,
		bubbleScroll: true,
		handle: '#move-button'
	}

	return (
		<S.Dropzone>
			{type === 'images' && files.length ? (
				<S.Images>
					<ReactSortable {...sortableProps}>
						{sortedImages
							.filter((item) => item.preview)
							.map(({ id, url, preview, name }, idx) => {
								if (!preview) return null

								const isMain = idx === 0

								return (
									<li key={id}>
										<Link href={url} target="_blank" download>
											<Image src={preview} width={117} height={117} alt={name} />

											{isMain ? <S.MainText>Главная</S.MainText> : null}

											<S.MoveButton
												id="move-button"
												onClick={(e) => {
													e.stopPropagation()
													e.nativeEvent.preventDefault()
												}}
											>
												<MoveIcon />
											</S.MoveButton>

											<S.RemoveImageButton
												onClick={(e) => {
													e.stopPropagation()
													e.nativeEvent.preventDefault()
													onFileRemove(id)
												}}
											>
												<CrossIcon width={14} height={14} viewBox="0 0 14 14" />
											</S.RemoveImageButton>
										</Link>
									</li>
								)
							})}
					</ReactSortable>

					<Button fullWidth color="blue" startIcon={<FilePlusIcon />} onClick={open}>
						Добавить фото
					</Button>
				</S.Images>
			) : null}

			{type === 'documents' && files.length ? (
				<S.Documents>
					<S.DocumentsList>
						{files.map(({ url, name, size, id }) => {
							const fileExtIdx = name.lastIndexOf('.')
							const fileExt = name.slice(fileExtIdx)
							const nameWithoutExt = name.slice(0, fileExtIdx)

							return (
								<li key={id}>
									<S.DocumentLink href={url} target="_blank" download>
										<S.DocumentPreview>
											<FileGrayIcon />
											<S.Text as="span">{fileExt}</S.Text>
										</S.DocumentPreview>

										<S.DocumentDescription>
											<S.Text>{nameWithoutExt}</S.Text>

											<S.DocumentSize variant="small">
												{formatBytes(parseInt(size))}
											</S.DocumentSize>
										</S.DocumentDescription>

										<S.DocumentRemoveButton
											onClick={(e) => {
												e.stopPropagation()
												e.nativeEvent.preventDefault()
												onFileRemove(id)
											}}
										>
											<CrossIcon />
										</S.DocumentRemoveButton>
									</S.DocumentLink>
								</li>
							)
						})}
					</S.DocumentsList>

					<Button fullWidth color="blue" startIcon={<FilePlusIcon />} onClick={open}>
						Добавить файл
					</Button>
				</S.Documents>
			) : null}

			{!files.length ? (
				<span {...getRootProps()}>
					{!isDragActive ? (
						<S.Placeholder>
							<S.Text variant="h2">Перетащите сюда файл</S.Text>
							<S.Text>или</S.Text>

							<Button color="blue" startIcon={<UploadIcon />} onClick={open}>
								Выберите файл
							</Button>

							<S.Text variant="small">Максимальный размер файла 64 МБ.</S.Text>
							<S.Text variant="small">Допустимые форматы файла .xls и .xlsx</S.Text>

							<input {...getInputProps()} />
						</S.Placeholder>
					) : (
						<S.PlaceholderDragActive>
							<S.Text variant="h2">
								Отпустите, <br /> чтобы начать загрузку
							</S.Text>

							{type === 'images' ? <ImageIcon /> : <FilePlusBigIcon />}
						</S.PlaceholderDragActive>
					)}

					<S.BorderBG>
						<DropzoneSVG />
					</S.BorderBG>
				</span>
			) : null}
		</S.Dropzone>
	)
}
