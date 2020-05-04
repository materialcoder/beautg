import React from 'react'
import { storiesOf } from '@storybook/react'
import Progress from './progress'

const defaultProgress = () => {
  return (
    <Progress
      percent={90}
    />
  )
}

storiesOf('Progress Component', module)
  .add('Progress', defaultProgress)
