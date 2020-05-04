import React from 'react'
import Upload from './upload'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const SimpleUpload = () => {
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      onProgress={action('progress')}
      onSuccess={action('success')}
      onError={action('error')}
    />
  )
}

storiesOf('Upload Component', module)
  .add('Upload', SimpleUpload)
