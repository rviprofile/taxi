import styled from '@emotion/styled'

import { Divider } from 'styled/components'

import { Popover } from 'ui/Popover/Popover.styled'
import { HeadingContainer } from '../Heading/Heading.styled'

export { Divider }

export const PopoverWithClose = styled(Popover)`
	.MuiPaper-root {
		display: flex;
		flex-direction: column;
		padding: 15px 20px;
		margin-top: 0;
	}

	${HeadingContainer} {
		${Divider} {
			margin-top: 15px;
		}
	}
`
