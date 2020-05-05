import React from 'react'
import Upload, { UploadFile } from './upload'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../Button/button'
import Icon from '../Icon/icon'

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
    >
      <Button btnType="primary">Upload File</Button>
    </Upload>
  )
}

const DragUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('change')}
      // defaultFileList={defaultFileList}
      onRemove={action('removed')}
      name='filename'
      data={{'key': 'value'}}
      headers={{'X-Powered-By': 'beautg'}}
      // accept=".png"
      multiple={true}
      drag={true}
      // beforeUpload={filePromise}
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  )
}

storiesOf('Upload Component', module)
  .add('Upload', SimpleUpload)
  .add('Drag Upload', DragUpload)
