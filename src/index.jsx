import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";

const rootEl = document.getElementById('app');

const placeHolderGenes = [{hugoGeneSymbol: "MDM2"}, {hugoGeneSymbol: "TP53"}];

render(<PathwayMapper isCBioPortal={false} genes={placeHolderGenes} store={undefined}/>, rootEl);

if (module.hot) {
  module.hot.accept();
}
