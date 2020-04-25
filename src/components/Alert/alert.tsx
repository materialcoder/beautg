import React, { useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
  Default='default',
  Success='success',
  Warning='warning',
  Danger='danger'
}

interface BaseAlertProps {
  title: string
  description?:string
  className?: string
  type?: string
  closable?: boolean
  onClose?: () => void
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true)
  const {
    title,
    description,
    className,
    type,
    closable,
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
    <>
      {
        showAlert ? (
          <div className={classes}>
            <span className={description ? "bold-title" : ''}>{title}</span>
            {description ? <p className="alert-description">{description}</p> : ''}
            {closable ? <div className="alert-close-btn" onClick={handleToggleClose}>关闭</div> : ''}
          </div>)
        : ''
      }
    </>
  )
}

Alert.defaultProps = {
  closable: true,
  type: AlertType.Default
}

export default Alert
