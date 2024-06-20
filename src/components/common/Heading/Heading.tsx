import { ReactNode } from 'react'

import { Variant } from 'styled/components/Text'

import * as S from './Heading.styled'

export interface HeadingProps {
	children: ReactNode
	variant?: Variant
	tag?: React.ElementType
	endAdornment?: JSX.Element
	divider?: boolean
}

export const Heading = ({
	children,
	variant = 'h2',
	tag,
	divider = true,
	endAdornment
}: HeadingProps) => {
	const getTag = (variant: Variant) => {
		if (variant === 'body1' || variant === 'body2') {
			return 'p'
		}

		return variant
	}

	return (
		<S.HeadingContainer>
			<S.Heading>
				{typeof children === 'string' ? (
					<S.Text variant={variant} as={tag || getTag(variant)}>
						{children}
					</S.Text>
				) : (
					children
				)}

				{endAdornment ? <S.EndAdornment>{endAdornment}</S.EndAdornment> : null}
			</S.Heading>

			{divider ? <S.Divider /> : null}
		</S.HeadingContainer>
	)
}
