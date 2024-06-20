import styled from '@emotion/styled'
import { dividerClasses } from '@mui/material'


export const FinanceStatsWrapper = styled.div`
		background-color: #373F48;
		border-radius: 5px;
		padding: 15px 20px 15px 20px;
		
		width: 30%;
`;

export const FinanceStatsHeader = styled.div`
    font-size: 18px;
    line-height: 20.68px;
		
		display: flex;
		justify-content: space-between;
		
		padding-bottom: 10px;
		border-bottom: 2px solid #42484F;
		
		span:nth-of-type(2) {
        font-size: 15px;
        font-weight: 500;
        line-height: 17.24px;
				color: #737D89;
    }
`;

export const FinanceStatBody = styled.div`
		padding-top: 20px;
		
		display: flex;
`;

export const Chart = styled.div`
		width: 130px;
		height: 130px;
		
		padding-right: 30px;
		border-right: 2px solid #42484F;
`;

export const ChartInfo = styled.div`
		padding-left: 20px;
		width: 100%;
		
		display: flex;
		flex-direction: column;
		
		justify-content: center;
		justify-content: space-around;
`;

export const ChartInfoItem = styled.div`
		display: flex;
		
		justify-content: space-between;
		
		div:nth-of-type(1) {
				color: #B4B4B4;
		}
		
		div:nth-of-type(2) {
				span {
						font-family: Roboto, sans-serif;
						color: #B4B4B4;
            line-height: 17.24px;
				}
		}
		
`;