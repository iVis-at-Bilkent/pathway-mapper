import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";

const rootEl = document.getElementById('app');


render(<PathwayMapper isCBioPortal={true}/>, rootEl);

if (module.hot) {
  module.hot.accept();
}
