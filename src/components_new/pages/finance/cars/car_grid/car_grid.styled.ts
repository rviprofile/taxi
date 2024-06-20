import styled from '@emotion/styled';
import { CarType } from './car_grid'


export const CarGridContainer = styled.div`
		display: grid;
    gap: 15px;
		grid-template-columns: repeat(5, 1fr);

    @media screen and (min-width: 1920px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (min-width: 2560px) {
        grid-template-columns: repeat(7, 1fr);
    }

    @media screen and (min-width: 3840px) {
        grid-template-columns: repeat(8, 1fr);
    }
`;

export const CarCard = styled.div`
		border-radius: 5px;
		padding: 15px 20px;
		background-color: rgba(55, 63, 72, 1);
		display: flex;
		flex-direction: column;
		height: 115px;
`;

export const CarInfoBlock = styled.div`
    div:nth-of-type(1) {
        font-size: 18px;
        line-height: 20.68px;
				margin-bottom: 5px;
    }

    div:nth-of-type(2) {
        font-size: 14px;
        line-height: 16.09px;
    }
`;

type CarStatusBlockProps = {
	color: string
}

export const CarStatusBlock = styled.div`
		
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-bottom: 10px;
		
		svg {
				margin-bottom: 3px;
		}
		
		div {
				color: ${props => props.color};
		}
`;

export const DriverInfoContainer = styled.div`
`;

export const DriverIncome = styled.div`
    margin-bottom: 10px;
		
		span:nth-of-type(1) {
				font-family: Ubuntu, sans-serif;
				font-size: 18px;
				line-height: 20.68px;
		}
		
		span:nth-of-type(2) {
				color: rgba(180, 180, 180, 1);
				font-weight: 400;
				line-height: 17.24px;
		}
`;

export const DriverName = styled.div`
    font-size: 18px;
    line-height: 20.68px;
`;

