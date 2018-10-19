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

const CLASSICO_URL = '/wizard/6';
const PIR_URL = '/wizard/4';

class wizard3 extends PureComponent {

  state = {
    nextUrl: PIR_URL,
  }

  onClick(e) {
    const selected = e.target.value;
    this.setState({
      nextUrl: selected === 'classico' ?  CLASSICO_URL : PIR_URL,
    })
  }
  onClick = this.onClick.bind(this);

  render() {

    const { nextUrl } = this.state;

    return (<Page>
        <Navbar>
          <NavTitle>Scelta Strategia 2/7</NavTitle>
        </Navbar>
        <Block strong>
          <BlockTitle>Per quanti anni vuoi investire?</BlockTitle>
          <p>Più la strategia di investimento è lunga e meglio è. I Portafogli a più lunga durata (ad esempio 7 anni o 10 anni) hanno potenzialità migliori di Rendimento rispetto a quelli di breve durata (ad esempio 3 anni) a fronte però di oscillazioni di valore più ampie (che nei primi anni possono essere anche negative).</p>
          <BlockTitle>Infatti:</BlockTitle>
          <p>La principale differenza fra i Portafogli di più Breve Periodo (per es. 3 anni) rispetto a quelli di Lungo Periodo (per es. 10 anni) è la composizione degli investimenti. Più lungo è il periodo e più in Portafoglio aumentano le percentuali di strumenti d’investimento con grado di Rendimento/Rischio elevato (come per esempio i mercati Azionari) e viceversa per i periodi più corti.</p>
          <p>Se vuoi puoi anche investire beneficiando delle <strong>agevolazioni fiscali</strong> introdotte dalla recente normativa dei Piani Individuali di Risparmio (PIR). In questo caso devi scegliere una strategia d’investimento con la durata minima di 5 anni.</p>
          <BlockTitle>Importante da sapere prima di scegliere !</BlockTitle>
          <p>
          I nostri portafogli <strong>non sono mai vincolati</strong> alla durata indicata e <strong>puoi disinvestire in qualsiasi momento</strong>: le durate di 3, 5 , 7 o 10 anni sono indicate al fine di ottimizzare la costruzione del Portafoglio. È pur vero che – tendenzialmente - i migliori risultati si ottengono rispettando l’orizzonte temporale prefissato nella strategia.
          </p>
          <List>
            <ListItem
              key="pir"
              radio
              name="portafoglio"
              checked={nextUrl === PIR_URL}
              value="pir"
              title="Portafoglio PIR"
              onChange={this.onClick}
            />
            <ListItem
              key="classico"
              radio
              name="portafoglio"
              checked={nextUrl === CLASSICO_URL}
              value="classico"
              title="Portafoglio classico"
              onChange={this.onClick}
            />
          </List>
          <Button href="/wizard/2" className="wilbur-button" outline>PRECEDENTE</Button>
          <Button href={nextUrl} className="wilbur-button" outline>SUCCESSIVO</Button>
        </Block>
      </Page>);
  }
};

export default wizard3;
