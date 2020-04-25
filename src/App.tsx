import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button className="custom" onClick={(e) => {e.preventDefault();alert(123)}}>Default Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Link Baidu</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Disabled Link</Button>
        <Button disabled>Disabled Button</Button> */}
        <Alert title="This is Default" onClose={() => {console.log('closed')}} />
        <Alert title="This is Success" type={AlertType.Success} />
        <Alert title="This is Warning" description="this is a long description" type={AlertType.Warning} />
        <Alert closable={false} title="This is Danger" type={AlertType.Danger} />
      </header>
    </div>
  );
}

export default App;
