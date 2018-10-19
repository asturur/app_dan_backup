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

class wizard4 extends PureComponent {

  state = {
    chosen: false,
  }

  onClick(e) {
    const selected = e.target.value;
    this.setState({
      chosen: selected === 'chosen',
    })
  }
  onClick = this.onClick.bind(this);

  render() {

    const { chosen } = this.state;

    return (<Page>
        <Navbar>
          <NavTitle>Scelta Strategia 3/7</NavTitle>
        </Navbar>
        <Block strong>
          <BlockTitle>Si può detenere un solo PIR per persona, quindi se già sei in possesso di un PIR, segui di nuovo il percorso dall’inizio.</BlockTitle>
          <p>
          Poiché la normativa stabilisce che si può investire fino ad un massimo di 30.000 euro all’anno in un PIR, l’unica opzione possibile per i nuovi conti PIR è la seguente:
          </p>
          <List>
            <ListItem
              key="pir"
              radio
              name="portafoglio"
              checked={chosen === true}
              value="chosen"
              title="Portafoglio PIR (da 10.000 a 30.000 euro)"
              onChange={this.onClick}
            />
          </List>
          <p>
          Se non hai i requisiti o non sei sicuro che il Portafoglio PIR sia la soluzione adatta a te:
          </p>
          <Button href="/wizard/1" className="wilbur-button" outline>INIZIA DI NUOVO IL PERCORSO</Button>
          <p>
          oppure
          </p>
          <Button disabled={!chosen} href="/wizard/5" className="wilbur-button" outline>SUCCESSIVO</Button>
        </Block>
      </Page>);
  }
};

export default wizard4;
