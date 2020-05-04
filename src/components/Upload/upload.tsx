import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import Button from '../Button/button'
import UploadList from './uploadList'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}

export interface UploadProps {
  /**上传地址 */
  action: string
  /**默认文件列表 */
  defaultFileList?: UploadFile[]
  /**上传之前的钩子函数，可用于判断文件类型和大小等 */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /**上传中 */
  onProgress?: (percentage: number, file: File) => void
  /**上传成功 */
  onSuccess?: (data: any, file: File) => void
  /**上传失败 */
  onError?: (err: any, file: File) => void
  /**选择文件后 */
  onChange?: (file: File) => void
  /**删除文件 */
  onRemove?: (file: UploadFile) => void
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return {...file, ...updateObj}
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if(fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList])
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0
        if (percentage < 100) {
          updateFileList(_file, {percent: percentage, status: 'uploading'})
          if (onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(res => {
      console.log(res)
      updateFileList(_file, {status: 'success', response: res.data})
      if (onSuccess) {
        onSuccess(res.data, file)
      }
      if (onChange) {
        onChange(file)
      }
    }).catch(err => {
      console.error(err)
      updateFileList(_file, {status: 'error', error: err})
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        onChange(file)
      }
    })
  }
  console.log(fileList)
  return (
    <div className="beautg-upload-component">
      <Button
        btnType="primary"
        onClick={handleClick}
      >
        Upload File
      </Button>
      <input
        className="beautg-file-input"
        type="file"
        style={{display: 'none'}}
        ref={fileInput}
        onChange={handleFileChange}
      />
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default Upload
