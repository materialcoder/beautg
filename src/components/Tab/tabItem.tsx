import React, { FC, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from './tabs'

export interface TabItemProps {
  index?: string
  /**选项名称 */
  label: string
  /**是否禁用 */
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: ReactNode
}

export const TabItem: FC<TabItemProps> = (props) => {
  const {
    index,
    label,
    disabled,
    className,
    style
  } = props
  const context = useContext(TabsContext)
  const klass = classNames('tabs-nav-item', className, {
    'is-actived': index === context.index,
    'is-disabled': disabled,
    'is-card': context.mode === 'card'
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <div className={klass} style={style} onClick={handleClick}>{label}</div>
  )
}

TabItem.displayName = 'TabItem'

export default TabItem
