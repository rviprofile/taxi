import styled from '@emotion/styled';
import { Dot, getColorStyles } from '../../../../components/common/ColoredDotText/ColoredDotText.styled'

import { Links, Link } from '../cars/cars.styled'

export { Link, Links }


export const CarTablePage = styled.div`
	width: 100%;
`;

export const DotWrapper = styled(Dot)<{color: string}>`
    ${({ color }) => getColorStyles(color as string)}
`

export const AnaliticBlock = styled.div`
		display: flex;
		margin-bottom: 30px;
		
		gap: 15px;
`;

export const CarFormWrapper = styled.div`
		display: flex;
		margin-bottom: 30px;
`;

export const TableWrapper = styled.div`
`;

export const TableHeader = styled.div`
		background-color: #737D89;
		display: flex;
		padding: 8px 20px;
		border-radius: 5px 5px 0 0;
		
		div {
				align-self: center;
				justify-self: flex-start;
		}


    div:nth-of-type(1) {
        flex-basis: 12%;
    }

    div:nth-of-type(2) {
        flex-basis: 7%;
    }

    div:nth-of-type(3) {
        flex-basis: 11%;
    }

    div:nth-of-type(4) {
        flex-basis: 7%;
    }

    div:nth-of-type(5) {
        flex-basis: 7%;
    }

    div:nth-of-type(6) {
        flex-basis: 7%;
    }

    div:nth-of-type(7) {
        flex-basis: 7%;
        color: ${props => (props.isDebtRed ? "#FF4741" : "#FFFFFF")}
    }

    div:nth-of-type(8) {
        flex-basis: 7%;
    }

    div:nth-of-type(9) {
        flex-basis: 7%;
    }

    div:nth-of-type(10) {
        flex-basis: 7%;

        display: flex;
        gap: 5px
    }

    div:nth-of-type(11) {
        flex-basis: 20%;
    }

    div:nth-of-type(12) {
        flex-basis: 2%;
    }

    div:nth-of-type(13) {
        flex-basis: 2%;
    }

`;

export const TableItem = styled.div<{isDebtRed?: boolean}>`
		display: flex;
    height: 41px;
		
    border-left: ${props => ( props.isDebtRed ? "2px solid #FF4741": "")};
    padding: 0 20px 0 20px;

    div {
        align-self: center;
        justify-self: flex-start;
    }

    div:nth-of-type(1) {
        flex-basis: 12%;
    }

    div:nth-of-type(2) {
        flex-basis: 7%;
    }

    div:nth-of-type(3) {
        flex-basis: 11%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
    }

    div:nth-of-type(4) {
        flex-basis: 7%;
    }

    div:nth-of-type(5) {
        flex-basis: 7%;
    }

    div:nth-of-type(6) {
        flex-basis: 7%;
    }

    div:nth-of-type(7) {
        flex-basis: 7%;
				color: ${props => (props.isDebtRed ? "#FF4741" : "#FFFFFF")}
    }

    div:nth-of-type(8) {
        flex-basis: 7%;
    }

    div:nth-of-type(9) {
        flex-basis: 7%;
    }

    div:nth-of-type(10) {
        flex-basis: 7%;
				
				display: flex;
				gap: 5px
    }

    div:nth-of-type(11) {
        flex-basis: 19%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
				margin-right: 1%;
    }

    div:nth-of-type(12) {
        flex-basis: 2%;
    }

    div:nth-of-type(13) {
        flex-basis: 2%;
    }
`;

export const TableItemInputWrapper = styled.div`
		
		position: relative;
    width: 90%;
		
    input {
        height: 30px;
        color: #FFFFFF;
        background-color: #373F48;
        border-radius: 5px;
        width: calc(100% - 10%);
        
        padding: 0px 10% 0 8px;
        border: none;
        box-shadow: 0px 0px 20px 0px #00000040;

        font-size: 15px;
        font-weight: 400;
        line-height: 17.24px;

    }
		
				
        
				svg {
						position: absolute;
						top: 25%;
						right: 0%;
						z-index: 10;
						cursor: pointer;
						
						path {
								stroke: #737D89;
						}
				}
		
				svg:hover {
            path {
                stroke: #FFFFFF;
            }
				}
`;

export const TableBody = styled.div`
		
		${TableItem} {
				background: #373F48;
		}
		
		${TableItem}:nth-of-type(2n) {
				background: #42484F;
		}
`;



export const TableFooter = styled.div`
		background: #373F48;
		height: 51px;
		width: calc(100% - 12px);
		
		display: flex;
		justify-content: center;
		
		padding-left: 12px
`;