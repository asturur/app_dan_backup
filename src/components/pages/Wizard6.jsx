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

class wizard6 extends PureComponent {

  state = {
    durata: 0,
  }

  onClick(e) {
    const selected = e.target.value;
    this.setState({
      durata: parseInt(selected, 10),
    })
  }
  onClick = this.onClick.bind(this);


  render() {
    const { durata } = this.state;

    return (<Page>
        <Navbar>
          <NavTitle>Scelta Strategia 5/7</NavTitle>
        </Navbar>
        <Block strong>
          <BlockTitle>Definisci meglio il tipo di Portafoglio Classico di tuo interesse</BlockTitle>
          <p>
          Qual è la tua propensione al rischio?
          </p>
          <p>
          I due estremi sono:
          </p>
          <p>
          <strong>Basso rischio.</strong> La priorità della strategia è quella di ottenere discreti rendimenti nei normali periodi di mercato e contenere le eventuali diminuzioni di valore del capitale investito quando i mercati sono turbolenti. Naturalmente, i rendimenti non possono essere molto elevati.<br/>
          <strong>Alto rischio.</strong> Nel caso in cui si preferisce puntare sui rendimenti alti, pur nella consapevolezza che – almeno nel breve termine – ci potrebbero essere consistenti diminuzioni di valore del capitale investito, qualora i mercati andassero in difficoltà.<br/>
          Nel lungo termine gli investimenti a più alto rischio hanno di solito migliori performance rispetto agli investimenti a basso rischio.
          </p>
          <p>Pertanto, nel costruire i Portafogli modello abbiamo seguito questa logica:</p>
          <p>
          Medio rischio -> Durata breve della strategia (5 anni)<br />
          Alto rischio -> Durata lunga della strategia (10 anni)<br />
          </p>
          <p>
          Scegli liberamente ciò che ti sembra meglio.
          </p>
          <p>
          Nel proseguo avrai comunque a tua disposizione altri elementi per confermare la tua scelta o meno.
          </p>
          <p>
          Sei vuoi contenere il rischio al massimo tieni conto i Portafogli Classici con orizzonte temporale a tre anni.
          </p>
          <List>
            <ListItem
              key="3anni"
              radio
              name="durata"
              checked={durata === 3}
              value={3}
              title="3 Anni"
              onChange={this.onClick}
            />
            <ListItem
              key="5anni"
              radio
              name="durata"
              checked={durata === 5}
              value={5}
              title="5 Anni"
              onChange={this.onClick}
            />
            <ListItem
              key="10anni"
              radio
              name="durata"
              checked={durata === 10}
              value={10}
              title="10 Anni"
              onChange={this.onClick}
            />
          </List>
          <p>
          Scegli liberamente ciò che ti sembra meglio. Fino alla selezione definitiva, puoi sempre modificare la tua scelta.
          </p>
          <Button href="/wizard/3" className="wilbur-button" outline>PRECEDENTE</Button>
          <Button disabled={!durata} href="/wizard/8" className="wilbur-button" outline>SUCCESSIVO</Button>
        </Block>
      </Page>);
  }
};

export default wizard6;
