import React from 'react'
import { storiesOf } from '@storybook/react'
// import Tabs from './tabs'
// import TabItem from './tabItem'
import {default as Tabs} from './index'
import { action } from '@storybook/addon-actions'

const simpleTab = () => (
  <Tabs onSelect={action('selected')}>
    <Tabs.Item label="tab1">tab1 content</Tabs.Item>
    <Tabs.Item label="tab2">tab2 content</Tabs.Item>
    <Tabs.Item label="tab3" disabled>tab3 content</Tabs.Item>
  </Tabs>
)

const cardTab = () => (
  <Tabs onSelect={action('selected')} mode="card">
    <Tabs.Item label="tab1">tab1 content</Tabs.Item>
    <Tabs.Item label="tab2">
      <h2>提示</h2>
      <p>这是一段文字</p>
    </Tabs.Item>
    <Tabs.Item label="tab3" disabled>tab3 content</Tabs.Item>
  </Tabs>
)

storiesOf('Tab Component', module)
  .add('Tabs', simpleTab)
  .add('卡片式 Tabs', cardTab)