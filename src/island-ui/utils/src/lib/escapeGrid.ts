import { theme } from '../../../theme/src/index'

export const escapeGrid = (gutter: number = theme.grid.gutter.mobile) => ({
  marginLeft: -gutter * 2,
  marginRight: -gutter * 2,
})
