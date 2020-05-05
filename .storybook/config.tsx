import '../src/styles/index.scss'
import { addDecorator, addParameters, configure } from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// fas 引入所有图标
library.add(fas)

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
)

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({
  info: {
    inline: true,
    header: false
  }
})

const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')]
  const req = require.context('../src/components', true, /\.stories\.tsx$/)
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}

configure(loaderFn, module)
