import React, { FC } from 'react'
import {UploadFile} from './upload'
import Icon from '../Icon/icon'

interface UploadListProps {
  fileList: UploadFile[]
  onRemove: (_file: UploadFile) => void
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {fileList, onRemove} = props
  return (
    <ul className="beautg-upload-list">
      {fileList.map(item => {
        return (
          <li className="beautg-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon theme="secondary" icon="file-alt" />
              {item.name}
            </span>
            <span className="file-status">
              {item.status === 'uploading' && <Icon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
              {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => {onRemove(item)}} />
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default UploadList
