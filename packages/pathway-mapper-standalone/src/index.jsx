import { PathwayMapper } from 'pathway-mapper';
import "pathway-mapper/dist/base.css";
import React from 'react';
import { render } from 'react-dom';
import { toast } from 'react-toastify';
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage"


window.onload = () => {
  const rootEl = document.getElementById('app');
  const placeHolderGenes = [/*{hugoGeneSymbol: "TP53"}, {hugoGeneSymbol: "CDKN2A"}, {hugoGeneSymbol: "CCNE1"}, {hugoGeneSymbol: "MDM4"}*/];


  const pathwayName = findGetParameter("pathwayName");

  const alterationJSON = findGetParameter("q");
  const alterationData = JSON.parse(alterationJSON);

  const genesParam = findGetParameter("g");
  let username = localStorage.getItem('username');
  
  let a = 127;
  localStorage.setItem(a, 10);

  if( localStorage.getItem("numberOfUsersSoFar") === undefined )
      localStorage.setItem("numberOfUsersSoFar", 0);
  localStorage.setItem("chat" + 12345, 5);

  let genes = [];
  if(genesParam){
    genes = genesParam.split("+").map(gene => ({hugoGeneSymbol: gene}))
  }

  const id = findGetParameter("id");

  if(!id){
    render(<WelcomePage postWelcome={postWelcome}/>, rootEl);
  }
  else {
    postWelcome(true, null);
  }

  function convertCharacter( character ){
    if( character === '0')
        return 0;
        if( character === '1')
        return 1;
        if( character === '2')
        return 2;
        if( character === '3')
        return 3;
        if( character === '4')
        return 4;
        if( character === '5')
        return 5;
        if( character === '6')
        return 6;
        if( character === '7')
        return 7;
        if( character === '8')
        return 8;
        if( character === '9')
        return 9;
    return -1;
  }

  function convertToNumber(value){
    let converted = 0;
    let powOf10 = 1;
    for( let i = value.length - 1; i >= 0; i--){
         converted = converted + powOf10 * ( convertCharacter(value.charAt(i)));
         powOf10 *= 10;
    }
    return converted;
  }



  function postWelcome(isCollaborative, userName ){
    //username = userName;
    const cBioAlteration = [/*{gene: "MDM2", altered: 5, sequenced: 6}*/];
    if( userName !== null && userName !== ""){
        localStorage.setItem('username', userName );
        username = localStorage.getItem('username');
    }
    if( isCollaborative && userName === null ) {
      render(<LoginPage postWelcome = {postWelcome} userName = {username} />, rootEl);
    }
    else if(!pathwayName){
      let userId = -1 ;
      if( isCollaborative && id !== null){
        let chatId = "chat" + id;
        if( localStorage.getItem(chatId + "numberOfUsers") === undefined || localStorage.getItem(chatId + "numberOfUsers") === null)
            localStorage.setItem(chatId + "numberOfUsers", 0);
        let numberOfUsers =  localStorage.getItem(chatId + "numberOfUsers");
        for( let i = 0; i < numberOfUsers; i+=2 ){
             let userNameinStorage = localStorage.getItem(chatId + i);
             if( userNameinStorage === username) {
                 let j = i + 1;
                 userId = localStorage.getItem(chatId + j);
                 userId = convertToNumber( userId);
             }
        }  
      }
     
      render(<PathwayMapper isCBioPortal={false} isCollaborative={isCollaborative} userName ={username} userId = {userId}/>, rootEl);
    } 
    else {
      let userId = -1 ;
      if( isCollaborative && id !== null){
        let chatId = "chat" + id;
        if( localStorage.getItem(chatId + "numberOfUsers") === undefined)
            localStorage.setItem(chatId + "numberOfUsers", 0);
        let numberOfUsers =  localStorage.getItem(chatId + "numberOfUsers");
        for( let i = 0; i < numberOfUsers; i+=2 ){
             let userNameinStorage = localStorage.getItem(chatId + i);
             if( userNameinStorage === username) {
                 let j = i + 1;
                 userId = localStorage.getItem(chatId + j);
                 userId = convertToNumber( userId);
             }
        }  
      }
      render(<PathwayMapper isCBioPortal={false} isCollaborative={isCollaborative} genes={genes} pathwayName={pathwayName} alterationData={alterationData} userName = {username} userId = {userId}/>, rootEl);
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