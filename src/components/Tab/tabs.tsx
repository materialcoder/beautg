import React, { FC, FunctionComponentElement, useState, createContext } from 'react'
import { TabItemProps } from './tabItem'
import classNames from 'classnames'

type TabMode = 'default' | 'card'

type SelectCallback = (selectedIndex: string) => void

interface ITabsContext {
  index?: string
  mode?: string
  onSelect?: SelectCallback
}

export interface TabsProps {
  /**默认激活的选项 */
  defaultIndex?: string
  className?: string
  /**选项卡样式 支持普通和card模式 */
  mode?: TabMode
  style?: React.CSSProperties
  /**切换选项卡事件 */
  onSelect?: SelectCallback
}

export const TabsContext = createContext<ITabsContext>({index: '0'})

/**
 * 选项卡切换组件
 * ## 引用方法
 * ~~~js
 * import {Tabs} from 'beautg'
 * ~~~
 */
export const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    mode,
    className,
    style,
    onSelect,
    children
  } = props
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const classes = classNames('beautg-tabs', className)
  const renderTabsNav = () => {
    return (
      React.Children.map(children, (child, index) => {
        const childElement = child as FunctionComponentElement<TabItemProps>
        const {displayName} = childElement.type
        if (displayName === 'TabItem') {
          return React.cloneElement(childElement, {
            index: index.toString()
          })
        } else {
          console.error('Warning: Tabs has a child which is not TabItem')
        }
      })
    )
  }
  const renderContent = () => {
    return (
      React.Children.map(children, (child, index) => {
        const childElement = child as FunctionComponentElement<TabItemProps>
        const klass = classNames('tabs-content-item', {
          'is-actived': activeIndex === index.toString()
        })
        return (
          <div className={klass}>{childElement.props.children}</div>
        )
      })
    )
  }
  const handleClick = (index: string) => {
    setActiveIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext:ITabsContext = {
    index: activeIndex ? activeIndex : '0',
    mode,
    onSelect: handleClick
  }
  return (
    <div className={classes} style={style}>
      <div className="tabs-nav">
        <TabsContext.Provider value={passedContext}>
          {renderTabsNav()}
        </TabsContext.Provider>
      </div>
      <div className="tabs-content">
        {renderContent()}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: '0',
  mode: 'default'
}

export default Tabs
