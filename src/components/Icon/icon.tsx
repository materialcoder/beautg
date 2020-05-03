import React, {FC} from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'warning' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /**描述图标样式 */
  theme?: ThemeProps
}

/**
 * SVG 图标组件，图标类型详见 FontAwesomeIcon
 * ## 引用方法
 * ~~~js
 * import {Icon} from 'beautg'
 * ~~~
 */
export const Icon: FC<IconProps> = (props) => {
  // icon-primary
  const {className, theme, ...restProps} = props
  const classes = classNames('beautg-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon
