import React from 'react';
import { Provider } from 'react-redux';
import {
  App,
  Panel,
  View,
  Statusbar,
  // Popup,
  // Page,
  // Navbar,
  // NavRight,
  // Link,
  // Block,
  // LoginScreen,
  // LoginScreenTitle,
  // List,
  // ListItem,
  // Label,
  // Input,
  // ListButton,
  // BlockFooter
} from 'framework7-react';

import routes from '../routes';
import { store } from '../store';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes,
  };

  return (
    <Provider store={store}>
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar />
      {/* Left Panel */}
      <Panel left cover themeDark>
        <View url="/panel-left/" />
      </Panel>
      {/* Main View */}
      <View id="main-view" url="/wizard/1" main className="ios-edges"/>
    </App>
    </Provider>
  );
};
