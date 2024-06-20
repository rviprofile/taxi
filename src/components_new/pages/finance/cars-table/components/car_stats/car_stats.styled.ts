import styled from '@emotion/styled'


export const CarStatsWrapper = styled.div`
		background-color: #373F48;
		
		padding: 15px 20px 0 20px;
		
		width: 15%;
		border-radius: 5px;
`;

export const StatHeader = styled.div`
    font-size: 18px;
    line-height: 20.68px;
		
		display: flex;
		justify-content: space-between;
		padding-bottom: 12px;
		
		border-bottom: 2px solid #42484F;
		
		div {
			margin-right: 35px;
		}
`;

export const StatBody = styled.div`
`;
export const StatItem = styled.div`
		padding: 10px 0px;
		
		display: flex;
		justify-content: space-between;
		
		div:nth-of-type(2) {
				span:nth-of-type(1) {
						margin-right: 10px;
				}

        span:nth-of-type(2) {
						color: #737D89;
        }
		}
`;