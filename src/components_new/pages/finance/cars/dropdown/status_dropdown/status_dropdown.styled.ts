import styled from '@emotion/styled'
import { Dot, getColorStyles } from '../../../../../../components/common/ColoredDotText/ColoredDotText.styled'

export const DotWrapper = styled(Dot)<{color: string}>`
    ${({ color }) => getColorStyles(color as string)}
`

export const StatusDropdownContent = styled.div``;

export const StatusDropdownSelect = styled.div``;

