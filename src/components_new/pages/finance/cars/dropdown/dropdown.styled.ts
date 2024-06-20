import styled from "@emotion/styled";
import { Dot } from 'components/common/ColoredDotText/ColoredDotText.styled';
import { css } from '@emotion/react'

export { Dot }

export const DotWrapper = styled(Dot)`
    ${({ color }) => getColorStyles(color)}
`

const getColorStyles = (color: string | undefined) => {
	switch (color) {
		case 'green':
			return css`
				& > span {
					background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
					text-shadow: 0px 2px 5px rgba(161, 200, 50, 0.1);
				}

				${Dot} span {
					background-image: var(--gradient-green);
					filter: drop-shadow(0px 2px 5px rgba(161, 200, 50, 0.2));
				}
			`
		case 'yellow':
			return css`
				& > span {
					background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
					text-shadow: 0px 2px 5px rgba(252, 208, 98, 0.1);
				}

				${Dot} span {
					background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(252, 208, 98, 0.2));
				}
			`
		case 'orange':
			return css`
				& > span {
					background-image: linear-gradient(45deg, #f39200 -2.94%, #cf7c00 102.94%);
					text-shadow: 0px 2px 5px rgba(219, 154, 57, 0.1);
				}

				${Dot} span {
					background-image: linear-gradient(45deg, #f39200 -2.94%, #cf7c00 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(219, 154, 57, 0.2));
				}
			`
		case 'red':
			return css`
				& > span {
					background-image: linear-gradient(73.26deg, #914e4e 0%, #ff0000 100%);
					text-shadow: 0px 2px 5px rgba(255, 0, 0, 0.1);
				}

				${Dot} span {
					background-image: linear-gradient(45deg, #ff0000 -2.94%, #740000 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(255, 0, 0, 0.2));
				}
			`
		case 'blue':
			return css`
				& > span {
					background-image: linear-gradient(89.87deg, #2f98cf 0%, #2fb8be 99.98%);
					text-shadow: 0px 2px 5px rgba(47, 159, 203, 0.1);
				}

				${Dot} span {
					background: #2f98cf;
					filter: drop-shadow(0px 2px 5px rgba(47, 159, 203, 0.2));
				}
			`
		case 'gray':
			return css`
				& > span {
					background-image: linear-gradient(45deg, #b4b4b4 -2.94%, #e2e2e2 102.94%);
					text-shadow: 0px 2px 5px rgba(161, 200, 50, 0.1);
				}

				${Dot} span {
					background: linear-gradient(45deg, #b4b4b4 -2.94%, #e2e2e2 102.94%);
				}
			`
		default:
			return null
	}
}

export const ComboboxWrapper = styled.div`
		position: relative;
`;

type ComboboxProps = {
	isOpen: boolean
}
export const Combobox = styled.div<ComboboxProps>`
		display: flex;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		padding: 7px 10px;
		cursor: pointer;
    
		height: 31px;
		width: 100%;

    color: rgba(180, 180, 180, 1);
    background: #000;
    background-clip: padding-box !important;
		
		border: 2px solid transparent !important;
		border-radius: 5px;

    &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -2px !important;
        border-radius: ${props => (props?.isOpen ? "5px 5px 0px 0px" : "5px")} !important;
        background: linear-gradient(
                to right,
                rgba(47, 152, 207, 1),
                rgba(47, 207, 178, 1)
        );
    }
`;

export const ComboboxContent = styled.div`
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
`;

type ComboboxSelectProps = {
	isOpen: boolean
}


export const ComboboxSelect = styled.div<ComboboxSelectProps>`
		position: absolute;
		z-index: 10;
		padding: 10px 10px 0 10px;
		width: calc(100% - 20px);
		height: auto;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		display: ${props => (props.isOpen ? "block" : "none")};

    background: rgba(66, 72, 79, 1);
`;

export const ComboboxSelectOption = styled.div``