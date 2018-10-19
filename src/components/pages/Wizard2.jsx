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

const SHORT_WIZARD = '/wizard/7';
const LONG_WIZARD = '/wizard/3';

class wizard2 extends PureComponent {

  state = {
    nextUrl: LONG_WIZARD,
  }

  onClick(e) {
    const selected = e.target.value;
    this.setState({
      nextUrl: selected === '3anni' ? SHORT_WIZARD : LONG_WIZARD,
    })
  }
  onClick = this.onClick.bind(this);


  render() {
    const { nextUrl } = this.state;

    return (<Page>
        <Navbar>
          <NavTitle>Scelta Strategia 1/7</NavTitle>
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
              key="3anni"
              radio
              name="lunghezza"
              checked={SHORT_WIZARD === nextUrl}
              value="3anni"
              title="3 Anni"
              onChange={this.onClick}
            />
            <ListItem
              key="oltre3"
              radio
              name="lunghezza"
              checked={LONG_WIZARD === nextUrl}
              value="oltre3"
              title="Da Almeno 5 Anni (5, 7, 10 anni)"
              onChange={this.onClick}
            />
          </List>
          <p>
          Scegli liberamente ciò che ti sembra meglio. Fino alla selezione definitiva, puoi sempre modificare la tua scelta.
          </p>
          <Button href={nextUrl} className="wilbur-button" outline>SUCCESSIVO</Button>
        </Block>
      </Page>);
  }
};

export default wizard2;
