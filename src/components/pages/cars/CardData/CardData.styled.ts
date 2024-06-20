import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { HeadingContainer } from 'components/common/Heading/Heading.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'

export { FormColumn, Divider, FieldsRow }

export const Form = styled.form`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
	}

	${HeadingContainer} {
		margin-bottom: 15px;

		${Divider} {
			margin-top: 5px;
			border-radius: 5px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		}
	}
`

export const HeadingDownload = styled.div`
	&&& {
		margin-bottom: 10px;

		${HeadingContainer} {
			margin-bottom: 0;
		}
	}
`

export const FirstColumn = styled(FormColumn)`
	${AvatarUpload} {
		margin: 0 auto 30px;
	}

	& > div:not(:first-of-type):not(:last-child) {
		margin-bottom: 15px;
	}
`

export const SecondColumn = styled(FormColumn)`
	padding-top: 22px;
`

export const ThirdColumn = styled(FormColumn)`
	padding-top: 22px;

	& > div > div:not(:last-child) {
		margin-bottom: 15px;
	}

	${FormControlLabel} {
		margin-top: auto;
	}
`
