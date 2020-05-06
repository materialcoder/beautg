import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './alert'
import { action } from '@storybook/addon-actions'

const defaultAlert = () => {
  return (
    <Alert title="default alert" />
  )
}

const typeAlert = () => {
  return (
    <div>
      <Alert title="default alert" /><br/>
      <Alert title="success alert" type="success" /><br/>
      <Alert title="warning alert" type="warning" /><br/>
      <Alert title="danger alert" type="danger" /><br/>
    </div>
  )
}

const iconAlert = () => {
  return (
    <div>
      <Alert title="default alert" showIcon /><br/>
      <Alert title="success alert" showIcon type="success" /><br/>
      <Alert title="warning alert" showIcon type="warning" /><br/>
      <Alert title="danger alert" showIcon type="danger" /><br/>
    </div>
  )
}

const descriptionAlert = () => {
  return (
    <Alert
      title="description alert"
      description="this is a desccription"
    />
  )
}

const closeableAlert = () => {
  return (
    <div>
      <Alert
        title="close alert"
        onClose={action('closed')}
      /><br/>
      <Alert
        title="can't close alert"
        type="danger"
        closable={false}
      />
    </div>
  )
}

storiesOf('Alert Component', module)
 .add('Alert', defaultAlert)
 .add('不同样式 Alert', typeAlert)
 .add('带描述的 Alert', descriptionAlert)
 .add('是否可关闭 Alert', closeableAlert)
 .add('带Icon的 Alert', iconAlert)