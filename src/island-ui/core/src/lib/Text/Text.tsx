import { Colors } from '../../../../../island-ui/theme/src'
import cn from 'classnames'
import React, { useContext, forwardRef } from 'react'
import { Box } from '../Box/Box'
import { ResponsiveSpace } from '../Box/useBoxStyles'
import { LinkContext } from '../context'
import {
  variantStyles,
  base,
  colors,
  defaultFontWeights,
  defaultLineHeights,
  fontWeight as fontWeightStyles,
  lineHeight as lineHeightStyles,
  TextVariants,
  truncate as truncateStyle,
  strikethrough as strikethroughStyle,
  whiteSpace as whiteSpaceStyle,
  capitalizeFirstLetter as capitalizeFirstLetterStyle,
} from './Text.css'
import { TestSupport } from '../../../../../island-ui/utils/src'

type TextElements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'caption'
  | 'pre'

export interface TextProps {
  id?: string
  children?: React.ReactNode
  as?: TextElements
  paddingTop?: ResponsiveSpace
  paddingBottom?: ResponsiveSpace
  paddingY?: ResponsiveSpace
  marginTop?: ResponsiveSpace
  marginBottom?: ResponsiveSpace
  marginY?: ResponsiveSpace
  variant?: TextVariants
  color?: Colors
  truncate?: boolean
  fontWeight?: keyof typeof fontWeightStyles
  lineHeight?: keyof typeof lineHeightStyles
  title?: string
  strikethrough?: boolean
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'preWrap'
    | 'preLine'
    | 'breakSpaces'
  capitalizeFirstLetter?: boolean
  translate?: 'yes' | 'no'
}

type GetTextStylesProps = Pick<
  TextProps,
  | 'variant'
  | 'color'
  | 'truncate'
  | 'fontWeight'
  | 'lineHeight'
  | 'strikethrough'
  | 'whiteSpace'
  | 'capitalizeFirstLetter'
>

export const getTextStyles = ({
  color,
  truncate,
  fontWeight,
  lineHeight,
  variant = 'default',
  strikethrough,
  whiteSpace,
  capitalizeFirstLetter,
}: GetTextStylesProps) =>
  cn(base, {
    [variantStyles[variant!]]: variant,
    [colors[color!]]: color,
    [fontWeightStyles[fontWeight!]]: fontWeight,
    [lineHeightStyles[lineHeight!]]: lineHeight,
    [defaultFontWeights[variant!]]: variant && !fontWeight,
    [defaultLineHeights[variant!]]: variant && !lineHeight,
    [truncateStyle]: truncate,
    [strikethroughStyle]: strikethrough,
    [whiteSpaceStyle[whiteSpace!]]: whiteSpace,
    [capitalizeFirstLetterStyle]: capitalizeFirstLetter,
  })

export const Text = forwardRef<HTMLElement, TextProps & TestSupport>(
  (
    {
      id,
      children,
      color,
      truncate,
      paddingTop,
      paddingBottom,
      paddingY,
      marginTop,
      marginBottom,
      marginY,
      fontWeight,
      lineHeight,
      variant = 'default',
      title,
      as = 'p',
      strikethrough,
      whiteSpace,
      dataTestId,
      capitalizeFirstLetter,
      translate = 'yes',
    },
    ref,
  ) => {
    const { linkRenderer } = useContext(LinkContext)
    return (
      <Box
        id={id}
        component={as}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginY={marginY}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingY={paddingY}
        data-testid={dataTestId}
        className={getTextStyles({
          color,
          truncate,
          fontWeight,
          lineHeight,
          variant,
          strikethrough,
          whiteSpace,
          capitalizeFirstLetter,
        })}
        ref={ref}
        title={title}
        translate={translate}
      >
        {React.Children.map<React.ReactNode, React.ReactNode>(
          children,
          (child: any) => {
            if (child?.props?.href && child?.props?.as) {
              // Checking to see if the child  using "href" and "as" props, which indicates it
              // is (most likely) a next.js link since the linkRenderer breaks this functionality.
              // TODO: Make linkRenderer handle next.js links.
              return child
            } else if (
              child?.props?.href &&
              typeof linkRenderer === 'function'
            ) {
              return linkRenderer(child.props.href, child.props.children)
            }

            return child
          },
        )}
      </Box>
    )
  },
)
