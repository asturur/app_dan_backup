import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    Block,
    BlockTitle,
    Button,
    Link
} from 'framework7-react';

export default () => (
  <Page>
    <Navbar>
      <Link iconIos="f7:menu" iconMd="material:menu" href="/graph/"></Link>
      <NavTitle>Percorso guidato</NavTitle>
    </Navbar>
    <Block strong>
      <BlockTitle>Scelta Strategia</BlockTitle>
      <p>Segui i successivi passi e rispondi alle domande che ti vengono poste. Otterrai una strategia di investimento basata su un Portafoglio modello.<br />
  Verifica che tale Portafoglio sia adatto a te. Se non sei sicuro o vuoi comunque confrontare altre soluzioni, segui di nuovo il percorso fino a che non trovi una soluzione che ti soddisfi.</p>
    <Button href="/wizard/2" className="wilbur-button" outline>Inizia</Button>
    </Block>
  </Page>
);
