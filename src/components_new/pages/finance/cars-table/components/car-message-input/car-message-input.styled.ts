import styled from '@emotion/styled'

export const CarMessageInputWrapper = styled.div`
		width: 60%;
		background-color: #373F48;
		border-radius: 5px;
		
		display: flex;
		padding-left: 20px;
		align-items: center;
`;

export const Input = styled.textarea`
		background-color: #42484F;
		
		border-radius: 5px;
		font-size: 15px;
		padding: 15px 20px;
		margin-right: 15px;
		
		color: white;
		
		width: calc(92% - 40px);
		height: calc(90% - 30px);

    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
`;

export const ButtonGroup = styled.div`
		display: flex;
		flex-direction: column;
		
		justify-content: space-between;
		height: 90%;	
`;

export const SendMessageButton = styled.button`
		border-radius: 5px;
		background:  linear-gradient(#88B114, #558F09, #2C7400, #408104);
		padding: 15px;
`;

export const ButtonMessage = styled.button`
    border-radius: 5px;
    background: #42484F;
    padding: 15px;
`;