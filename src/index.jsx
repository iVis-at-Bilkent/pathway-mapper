import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";

window.onload = () => {
  const rootEl = document.getElementById('app');
  console.log(window.location.search);
  const placeHolderGenes = [{hugoGeneSymbol: "MDM2"}, {hugoGeneSymbol: "TP53"}];


  const pathwayName = findGetParameter("pathwayName");
  console.log(pathwayName);
  const alterationJSON = findGetParameter("q");
  const alterationData = JSON.parse(alterationJSON);
  console.log(alterationData);

  if(!pathwayName){
    render(<PathwayMapper isCBioPortal={false} genes={placeHolderGenes} store={undefined}/>, rootEl);
  } else {
    render(<PathwayMapper isCBioPortal={false} genes={placeHolderGenes} store={undefined} pathwayName={pathwayName} alterationData={alterationData}/>, rootEl);
  }
  console.log("hello");
  if (module.hot) {
    module.hot.accept();
  }

  function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }
}