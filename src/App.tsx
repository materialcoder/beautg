import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Default Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link Baidu</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Disabled Link</Button>
        <Button disabled>Disabled Button</Button>
      </header>
    </div>
  );
}

export default App;
