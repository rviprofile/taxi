import styled from '@emotion/styled'
import MuiPopover from '@mui/material/Popover'

import { Divider } from 'styled/components'
import { Button } from 'ui/Button/Button.styled'

export const Popover = styled(MuiPopover)`
	${Divider} {
		background: var(--color-gray-200);
	}

	${Button} {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
	}
`
