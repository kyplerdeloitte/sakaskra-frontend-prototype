import { theme } from '../../../../theme/src/index'
import { Icon as IconType, Type } from './iconMap'

const colors = theme.color

export type Size = 'small' | 'medium' | 'large'
export type IconMapType = Type
export type IconMapIcon = IconType

export interface IconProps {
  type?: Type
  icon: IconType
  title?: string
  titleId?: string
  color?: keyof typeof colors
  size?: Size
  className?: string
  skipPlaceholderSize?: boolean
  ariaHidden?: boolean
}

export interface SvgProps {
  title?: string
  titleId?: string
  className?: string
  width?: string
  height?: string
  fill?: string
  color?: string
}

export interface PlaceholderProps
  extends Pick<IconProps, 'skipPlaceholderSize' | 'className'>,
    Required<Pick<IconProps, 'size'>> {}
