import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './icon'

const primaryIcon = () => (
  <div>
    <Icon theme="primary" icon="coffee"></Icon>
    <Icon theme="danger" icon="coffee"></Icon>
    <Icon theme="warning" icon="coffee"></Icon>
  </div>
)

storiesOf('Icon Component', module)
  .add('Icon', primaryIcon)
