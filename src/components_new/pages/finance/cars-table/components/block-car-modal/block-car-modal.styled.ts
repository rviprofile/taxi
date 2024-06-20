import styled from '@emotion/styled';
import { Modal } from 'ui';

export const BlockCarModal = styled(Modal)`

`

export const ModalContent = styled.div`
		width: 380px;
		flex-direction: column;
		display: flex;
		padding: 0 15px 0 15px;
		
		
		div {
				text-align: center;
		}
`;

export const ModalText = styled.div`
		
		padding: 0 8px 0 8px;
		
		div:nth-of-type(1) {
        font-size: 15px;
        font-weight: 500;
        line-height: 17.24px;
				
				margin-bottom: 20px;
    }

    div:nth-of-type(2) {
        font-size: 17px;
        font-weight: 500;
        line-height: 19.53px;
				
				margin-bottom: 5px;
    }

    div:nth-of-type(3) {
        font-size: 15px;
        font-weight: 500;
        line-height: 17.24px;
				
				margin-bottom: 50px;
    }
		
		div:nth-of-type(4) {
        color: #737D89;

        font-size: 14px;
        font-weight: 400;
        line-height: 16.09px;
				margin-bottom: 15px;
    }
`;
export const ModalHeader = styled.h2`
    font-size: 17px;
    font-weight: 500;
    line-height: 19.53px;
		text-align: center;
		
		margin-bottom: 15px;
`