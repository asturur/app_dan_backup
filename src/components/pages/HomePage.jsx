import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';
import FormBlock from './FormBlock';

export default () => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Test app</NavTitle>
    </Navbar>
    <Block strong>
      <p>Esempio di web app</p>
    </Block>
    <BlockTitle>Controlli</BlockTitle>
    <FormBlock />
  </Page>
);
