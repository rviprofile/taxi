import styled from '@emotion/styled'


export const CarsWrapper = styled.div`
	width: 100%;
`;

export const CarsFormWrapper = styled.div`
		display: flex;
		gap: 10px;
		align-items: center;
		margin-bottom: 15px;
`;

export type LinkProps = {
	isActive?: boolean;
}

export const Link = styled.span<LinkProps>`
		background-color: ${({isActive = false}) => (isActive ? "rgba(55, 63, 72, 1)" : "rgba(46, 53, 59, 1)")};
		padding: 7px 10px;
		
		cursor: pointer;
`;

export const Links = styled.div`
		border-radius: 5px;
		margin-right: 20px;
		width: 74px;
		display: flex;
		
		${Link}:nth-of-type(2) {
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
				svg {
						path {
                fill: white;
						}
				}
		}
		
		${Link}:nth-of-type(1) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

`;

