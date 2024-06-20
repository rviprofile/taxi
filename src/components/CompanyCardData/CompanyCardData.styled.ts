import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { TextareaContainer, Textarea } from 'ui/Textarea/Textarea.styled'
import { HeadingContainer } from 'components/common/Heading/Heading.styled'

export { FormColumn, Divider, FieldsRow }

export const CompanyCardData = styled.form`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
	}

	${AvatarUpload} {
		margin: 0 auto 20px;
	}

	${FormColumn} {
		& > div:not(:first-of-type) > *:not(:last-child) {
			margin-bottom: 15px;
		}

		&:first-of-type {
			& > div:nth-of-type(2) ${TextareaContainer} ${Textarea} {
				min-height: 48px;
				text-align: center;
			}

			& > div:last-of-type ${Textarea} {
				min-height: 80px;
			}
		}

		&:last-of-type {
			${FieldsRow} {
				label {
					word-spacing: 9999999px;
				}
			}
		}
	}

	${HeadingContainer} {
		${Divider} {
			margin-top: 5px;
			border-radius: 5px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		}
	}
`
