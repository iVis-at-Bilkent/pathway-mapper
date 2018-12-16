//Import node modules here !
var $ = window.$ = window.jQuery = require('jquery');
var _ = window._ = require('underscore');
var Backbone = window.Backbone = require('backbone');
Backbone.$ = $;
require('bootstrap');
var html5tooltips = require('html5tooltipsjs');

var WelcomePageView = require('./BackboneViews/WelcomePageView.js');
var AppManager = require('./Managers/AppManager');
var ShareDBModule = require('./Managers/ShareDBManager');
var SaveLoadUtilities = require('./Utils/SaveLoadUtility.js');

//Wait all components to load
$(window).load(function()
{
    window.html5tooltips = html5tooltips;
    function getLocalPathway(pathwayName)
    {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
            {
                var allEles = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(allEles.nodes, allEles.edges);
                window.appManager.pathwayDetailsView.updatePathwayProperties({
                    fileName: allEles.title + ".txt",
                    pathwayTitle: allEles.title,
                    pathwayDescription: allEles.description
                });
            }
            else
            {
                console.log(request.responseText);
            }
        };
        request.open("GET", "/pathway?filename="+pathwayName);
        request.send();
    }

    var localUsageCallback = function(postSuccess)
    {
        var appInstance = new AppManager(false, undefined, false);
        postSuccess();

        var uri = window.location.search;
        if (uri.length > 0)
        {
            var pathwayName = uri.substring(uri.indexOf("=") + 1 , uri.length);
            getLocalPathway(pathwayName);
        }
    }


    var cBioPortalUsageCallback = function(postSuccess)
    {
        var appInstance = new AppManager(false, undefined, true);
        postSuccess();

        var uri = window.location.search;
        if (uri.length > 0)
        {
            var pathwayName = uri.substring(uri.indexOf("=") + 1 , uri.length);
            getLocalPathway(pathwayName);
        }
    }

    //TODO urgent comment needed with a rested mind !
    var collaborativeUsageCallback = function(postSuccess) {

        var shareDBManager = new ShareDBModule(postSuccess);

        var appInstance = new AppManager(true, shareDBManager, false);

        shareDBManager.initShareDB();
    };

    var welPage = new WelcomePageView({
        el: $('.welcomePageContainer'),
        localUsageCallback: localUsageCallback,
        collaborativeUsageCallback: collaborativeUsageCallback,
        cBioPortalUsageCallback: cBioPortalUsageCallback
    }).render();


    //Trigger cBioPortal Usage
    $('.landingContent h3').hide();
    $('.welPageButtons').hide();
    $('#cBioPortalUsage').click();
    $('.continueButton').click().hide();
/*
    //TODO SHAME  !!!  ⍾ ⍾ ⍾ ⍾ ⍾
    var uri = window.location.search;
    if (uri.length > 0)
    {

        var uriTerm = uri.substring(1,uri.indexOf("="));

        if(uriTerm === "id")
        {
            //Trigger collaborative usage, if there is existing pathway id
            $('.landingContent h3').hide();
            $('.welPageButtons').hide();
            $('#collaborativeUsage').click();
            $('.continueButton').click().hide();
        }
        else if(uriTerm === "filename")
        {
            //Trigger collaborative usage, if there is existing pathway id
            $('.landingContent h3').hide();
            $('.welPageButtons').hide();
            $('#localUsage').click();
            $('.continueButton').click().hide();
        }
        else if(uriTerm === "cbp")
        {
            //Trigger cBioPortal Usage
            $('.landingContent h3').hide();
            $('.welPageButtons').hide();
            $('#cBioPortalUsage').click();
            $('.continueButton').click().hide();
        }
    }
*/
});
