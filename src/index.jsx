import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";

const rootEl = document.getElementById('app');
console.log(window.location.search);
const placeHolderGenes = [{hugoGeneSymbol: "MDM2"}, {hugoGeneSymbol: "TP53"}];


const pathwayName = findGetParameter("pathwayName");
console.log(pathwayName);
if(pathwayName === null){
  render(<PathwayMapper isCBioPortal={true} genes={placeHolderGenes} store={undefined}/>, rootEl);
} else {
  render(<PathwayMapper isCBioPortal={false} genes={placeHolderGenes} store={undefined} pathwayName={pathwayName}/>, rootEl);
}

if (module.hot) {
  module.hot.accept();
}

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
      tmp = items[index].split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}
