import { css } from '@emotion/react'
import styled from '@emotion/styled'

export type Variant = 'h1' | 'h2' | 'body1' | 'body2' | 'small'

interface TextProps {
	variant?: Variant
}

const getVariantStyles = (variant: Variant) => {
	switch (variant) {
		case 'h1':
			return css`
				font-size: 24px;
				font-weight: 700;
				line-height: 28px;
			`
		case 'h2':
			return css`
				font-size: 18px;
				line-height: 21px;
			`
		case 'body1':
			return css`
				font-size: 15px;
				line-height: 28px;
				line-height: 17px;
			`
		case 'body2':
			return css`
				font-size: 14px;
				line-height: 16px;
			`
		case 'small':
			return css`
				font-size: 12px;
				line-height: 14px;
			`
	}
}
export const Text = styled.p<TextProps>`
	${({ variant = 'body1' }) => getVariantStyles(variant)}
`
