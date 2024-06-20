import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'
import { HeadingContainer } from 'components/common/Heading/Heading.styled'

export { FormColumn, Divider, FieldsRow }

export const FirstColumn = styled(FormColumn)`
	${AvatarUpload} {
		margin: 0 auto 20px;
	}

	& > div:nth-of-type(2) ${Textarea} {
		min-height: 48px;
		text-align: center;
	}

	& > div:last-of-type ${Textarea} {
		min-height: 80px;
	}
`

export const SecondColumn = styled(FormColumn)`
	${FieldsRow} {
		label {
			word-spacing: 9999999px;
		}
	}
`

export const CounterpartyLegalEntityForm = styled.form`
	display: flex;
	max-width: 750px;
	background: var(--color-gray-300);
	border-radius: 5px;

	& > ${Divider} {
		margin: 30px 0;
		background: var(--color-gray-200);
	}

	${HeadingContainer} {
		${Divider} {
			margin-top: 5px;
			border-radius: 5px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		}
	}
`
