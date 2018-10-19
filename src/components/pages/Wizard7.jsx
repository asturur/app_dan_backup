import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    Page,
    Navbar,
    NavTitle,
    Block,
    BlockTitle,
    Button,
    List,
    ListItem,
} from 'framework7-react';

class wizard7 extends PureComponent {

  state = {
    amount: 0,
  }

  onClick(e) {
    const selected = e.target.value;
    this.setState({
      amount: parseInt(selected, 10),
    })
  }
  onClick = this.onClick.bind(this);

  render() {
    const { amount } = this.state;

    return (<Page>
        <Navbar>
          <NavTitle>Scelta Strategia 6/7</NavTitle>
        </Navbar>
        <Block strong>
          <BlockTitle>Qual è l’importo che desideri investire?</BlockTitle>
          <p>
          Seleziona il Portafoglio Classico di tuo interesse:
          </p>
          <List>
            <ListItem
              key="10-30"
              radio
              name="amount"
              checked={amount === 10}
              value={10}
              title="Da 10.000 a 30.000 euro"
              onChange={this.onClick}
            />
            <ListItem
              key="30-60"
              radio
              name="amount"
              checked={amount === 30}
              value={30}
              title="Da 30.000 a 60.000 euro"
              onChange={this.onClick}
            />
            <ListItem
              key="60-250"
              radio
              name="amount"
              checked={amount === 60}
              value={60}
              title="Da 60.000 a 250.000 euro"
              onChange={this.onClick}
            />
          </List>
          <Button href="/wizard/1" className="wilbur-button" outline>INIZIA DI NUOVO IL PERCORSO</Button>
          <Button disabled={!amount} href="/wizard/8" className="wilbur-button" outline>SUCCESSIVO</Button>
        </Block>
      </Page>);
  }
};

export default wizard7;
