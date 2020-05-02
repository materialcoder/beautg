import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import MenuItem from './components/Menu/menuItem';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} size="lg"/>
      <header className="App-header">
        <Button className="custom" onClick={(e) => {e.preventDefault();alert(123)}}>Default Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Link Baidu</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Disabled Link</Button>
        <Button disabled>Disabled Button</Button>
        <Alert title="This is Default" onClose={() => {console.log('closed')}} />
        <Alert title="This is Success" type={AlertType.Success} />
        <Alert title="This is Warning" description="this is a long description" type={AlertType.Warning} />
        <Alert closable={false} title="This is Danger" type={AlertType.Danger} />
        <Menu defaultIndex='0' mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
            <MenuItem>dropdown 3</MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
