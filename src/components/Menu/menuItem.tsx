import React, { useContext, FC } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: string
  /**描述是否禁用 */
  disabled?: boolean
  className?: string
  /**自定义style样式 */
  style?: React.CSSProperties
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {index, disabled, className, style, children} = props
  const context = useContext(MenuContext)
  const  classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
