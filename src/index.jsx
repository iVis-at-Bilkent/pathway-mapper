import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";

const rootEl = document.getElementById('app');

const placeHolderGene = {hugoGeneSymbol: "MDM2"};

render(<PathwayMapper isCBioPortal={false} genes={[placeHolderGene]} store={undefined}/>, rootEl);

if (module.hot) {
  module.hot.accept();
}
