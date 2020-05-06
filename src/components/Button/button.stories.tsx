import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'
import Icon from '../Icon'

// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }

// const CenterDecorator = (storyFn: any) => (<div style={styles}>{storyFn()}</div>)

const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg">large buttong</Button>
    <Button>default buttong</Button>
    <Button size="sm">small buttong</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary">primary button</Button> 
    <Button>default button</Button> 
    <Button btnType="dashed">dashed button</Button> 
    <Button btnType="link" href="https://www/baidu.com">link button</Button>
  </>
)

const disabledButton = () => (
  <>
    <Button btnType="primary" disabled onClick={action('clicked')}>default button</Button>
    <Button disabled onClick={action('clicked')}>default button</Button>
  </>
)

const dangerButton = () => (
  <>
    <Button btnType="primary" danger onClick={action('clicked')}>default button</Button>
    <Button btnType="dashed" danger onClick={action('clicked')}>default button</Button>
    <Button danger onClick={action('clicked')}>default button</Button>
    <Button danger btnType="link" href="https://www/baidu.com">link button</Button>
  </>
)

const iconButton = () => (
  <>
    <Button btnType="primary">
      <Icon icon="download" />
    </Button>
    <Button btnType="primary">
      <Icon icon="search" />
    </Button>
  </>
)

const shapeButton = () => (
  <>
    <Button btnType="primary" shape="circle">A</Button>
    <Button btnType="primary" shape="round">download</Button>
  </>
)

storiesOf('Button Component', module)
  // .addDecorator(CenterDecorator)
  .add('Button', defaultButton)
  .add('不同尺寸 Button', buttonWithSize)
  .add('不同类型 Button', buttonWithType)
  .add('禁用的 Button', disabledButton)
  .add('危险的 Button', dangerButton)
  .add('带icon的 Button', iconButton)
  .add('不同形状 Button', shapeButton)

