import React from 'react'
import {storiesOf} from '@storybook/react'
import Input from './input'

const defaultInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="placeholder"
  />
)

const sizeInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      placeholder="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
  </>
)

const disabledInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="disabled input"
    disabled
  />
)

const iconInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="icon input"
    icon="search"
  />
)

const pandInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      placeholder="prepend input"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      placeholder="append input"
      append=".com"
    />
  </>
)

storiesOf('Input Component', module)
  .add('Input', defaultInput)
  .add('不同大小 Input', sizeInput)
  .add('禁用的 Input', disabledInput)
  .add('带图标的 Input', iconInput)
  .add('带前后缀的 Input', pandInput)
