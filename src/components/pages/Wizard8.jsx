import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    Page,
    Navbar,
    NavTitle,
    Link,
    Block,
    BlockTitle,
    Button,
} from 'framework7-react';

class wizard8 extends PureComponent {

  showConfirmation() {

  }

  render() {
    return (<Page>
        <Navbar>
          <NavTitle>Scelta Strategia 7/7</NavTitle>
        </Navbar>
        <Block strong>
          <BlockTitle>Selezione definitiva</BlockTitle>
          <p>Hai scelto il: ... .... ...</p>
          <Link back external href="https://www.wilburmoney.it/pir-a-10-anni/">Vedi i dettagli del Portafoglio (verrà aperta una nuova finestra)</Link>
          <p>
          <strong>Confermi di accettare questo tipo di portafoglio?</strong> Fai attenzione, perchè non potrai selezionare nuovi tipi di portafogli se non acquistandoli a parte (ognuno al costo di 39 euro, Iva compresa).
          </p>
          <Button href="/wizard/1" className="wilbur-button" outline>INIZIA DI NUOVO IL PERCORSO</Button>
          <Button onClick={this.showConfirmation} className="wilbur-button" outline>CONFERMO</Button>
        </Block>
      </Page>);
  }
};

export default wizard8;
