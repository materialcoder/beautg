import React, { ReactElement, InputHTMLAttributes, FC, ChangeEvent } from 'react'
import Icon from '../Icon/icon'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'sm'

// Omit 忽略掉 size 属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean
  /**设置Input大小 */
  size?: InputSize
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp
  /**添加前缀，用于配置一些固定组合 */
  prepend?: string | ReactElement
  /**添加后缀，用于配置一些固定组合 */
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Input 输入框
 * ## 引入方式
 * ~~~js
 * import {Input} from 'beautg'
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  // 取出各种属性
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  // 根据属性计算不同的className
  const classes = classNames('beautg-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': append || prepend,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  // 解决useState中没有传入默认值
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  // 解决同时设置value和defaultValue
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    // 根据属性判断是否要添加特定的节点
    <div className={classes} style={style}>
      {prepend && <div className="beautg-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        className="beautg-input-inner"
        disabled={disabled}
        {...restProps}      
      />
      {append && <div className="beautg-input-group-append">{append}</div>}
    </div>
  )
}

export default Input
