import React from 'react'
import Upload, { UploadFile } from './upload'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const defaultFileList: UploadFile[] = [
  {uid: '122', size: 1234, name: 'hello.md', status: 'uploading', percent: 10},
  {uid: '123', size: 1234, name: 'zxz.md', status: 'success', percent: 20},
  {uid: '124', size: 1234, name: 'zsq.md', status: 'error', percent: 30},
]

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false
  }
  return true
}

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', {type: file.type})
  return Promise.resolve(newFile)
}

const SimpleUpload = () => {
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      onChange={action('change')}
      // defaultFileList={defaultFileList}
      onRemove={action('removed')}
      name='filename'
      data={{'key': 'value'}}
      headers={{'X-Powered-By': 'beautg'}}
      accept=".png"
      multiple={true}
      // beforeUpload={filePromise}
    />
  )
}

storiesOf('Upload Component', module)
  .add('Upload', SimpleUpload)
