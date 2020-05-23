import React from 'react';
import './App.css';
import { DefaultButton, Dialog, DialogType, DialogFooter, PrimaryButton, ContextualMenu } from '@fluentui/react';


export interface IAppProps {
}

export interface IAppState {
  dialogIsVisible: boolean
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      dialogIsVisible: false
    }
  }

  public render() {
    const { dialogIsVisible } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <DefaultButton onClick={() => this.setState({ dialogIsVisible: true })}>Hello</DefaultButton>
          <Dialog modalProps={{isBlocking: false, dragOptions: {menu: ContextualMenu, closeMenuItemText: "Close", moveMenuItemText: "Menu"}}} hidden={!dialogIsVisible} dialogContentProps={{ type: DialogType.normal, title: "Hello dialog", subText: "Hello from React with Fluent UI!" }}>
            <DialogFooter>
              <PrimaryButton onClick={() => this.setState({ dialogIsVisible: false })}>Hide</PrimaryButton>
            </DialogFooter>
          </Dialog>
        </header>
      </div>
    );
  }
}
