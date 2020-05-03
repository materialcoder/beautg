import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const defaultMenu = () => (
  <Menu>
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>cool link 2</MenuItem>
    <MenuItem>cool link3</MenuItem>
  </Menu>
)

const verticalMenu = () => (
  <Menu mode="vertical">
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>cool link 2</MenuItem>
    <MenuItem>cool link3</MenuItem>
  </Menu>
)

const subMenu = () => (
  <Menu defaultOpenSubMenus={['2']} mode="vertical">
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>cool link 2</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown 1</MenuItem>
      <MenuItem>dropdown 2</MenuItem>
      <MenuItem>dropdown 3</MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('垂直方向 Menu', verticalMenu)
  .add('子菜单 Menu', subMenu)
