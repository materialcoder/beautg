import React, { useState, FC } from 'react'
import classNames from 'classnames'
import Transition from '../Transition/transition'
import Icon from '../Icon/icon'

// export enum AlertType {
//   Default='default',
//   Success='success',
//   Warning='warning',
//   Danger='danger'
// }

export type AlertType = 'default' | 'success' | 'warning' | 'danger'

interface BaseAlertProps {
  /**显示标题 */
  title: string
  /**显示描述内容 */
  description?:string
  className?: string
  /**定义显示类型 */
  type?: AlertType
  /**是否可关闭 */
  closable?: boolean
  /**是否显示辅助图标 */
  showIcon?: boolean
  /**关闭alert时触发事件 */
  onClose?: () => void
}

export const Alert: FC<BaseAlertProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true)
  const {
    title,
    description,
    className,
    type,
    closable,
    showIcon,
    onClose
  } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type
  })

  const handleToggleClose = function() {
    setShowAlert(false)
    onClose && onClose()
  }
  return (
    <Transition
      in={showAlert}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes}>
        {(showIcon && (type === 'default' || type === 'warning')) &&
          <span className="alert-icon"><Icon icon="info-circle" /></span>
        }
        {(showIcon && type === "success") &&
          <span className="alert-icon"><Icon icon="check-circle" /></span>
        }
        {(showIcon && type === "danger") &&
          <span className="alert-icon"><Icon icon="times-circle" /></span>
        }
        <span className={description ? "bold-title" : ''}>{title}</span>
        {description ? <p className="alert-description">{description}</p> : ''}
        {closable && 
          <div
            className="alert-close-btn"
            onClick={handleToggleClose}
          >
            <Icon icon="times" />
          </div>
        }
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  closable: true,
  type: 'default'
}

export default Alert
