import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";
import WelcomePage from "./WelcomePage";

window.onload = () => {
  const rootEl = document.getElementById('app');
  console.log(window.location.search);
  const placeHolderGenes = [/*{hugoGeneSymbol: "TP53"}, {hugoGeneSymbol: "CDKN2A"}, {hugoGeneSymbol: "CCNE1"}, {hugoGeneSymbol: "MDM4"}*/];


  const pathwayName = findGetParameter("pathwayName");

  const alterationJSON = findGetParameter("q");
  const alterationData = JSON.parse(alterationJSON);

  const genesParam = findGetParameter("g");
  let genes = [];
  if(genesParam){
    genes = genesParam.split("+").map(gene => ({hugoGeneSymbol: gene}))
  }

  console.log(genes);

  const id = findGetParameter("id");

  if(!id){
    render(<WelcomePage postWelcome={postWelcome}/>, rootEl);
  } else {
    postWelcome(true);
  }

  function postWelcome(isCollaborative){
    const cBioAlteration = [/*{gene: "MDM2", altered: 5, sequenced: 6}*/];
    if(!pathwayName){
      render(<PathwayMapper isCBioPortal={false} isCollaborative={isCollaborative} genes={placeHolderGenes} cBioAlterationData={cBioAlteration}/>, rootEl);
    } else {
      render(<PathwayMapper isCBioPortal={false} isCollaborative={isCollaborative} genes={genes} pathwayName={pathwayName} alterationData={alterationData}/>, rootEl);
    }
    if (module.hot) {
      module.hot.accept();
    }
  
  }
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