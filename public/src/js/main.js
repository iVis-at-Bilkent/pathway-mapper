//Import node modules here !
var $ = window.$ = window.jQuery = require('jquery');
var _ = window._ = require('underscore');
var Backbone = window.Backbone = require('backbone');
Backbone.$ = $;
require('bootstrap');
require('./RealTimeUtils');//Google's real time utility lib which is customized also for this tool :)

var WelcomePageView = require('./BackboneViews/WelcomePageView.js');
var AppManager = require('./AppManager');
var RealTimeModule = require('./RealTimeManager');
var SaveLoadUtilities = require('./SaveLoadUtility.js');

//Wait all components to load
$(window).load(function()
{
    function getLocalPathway(pathwayName)
    {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
            {
                var allEles = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(allEles.nodes, allEles.edges);
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
        var appInstance = new AppManager(false);
        postSuccess();

        var uri = window.location.search;
        if (uri.length > 0)
        {
            var pathwayName = uri.substring(uri.indexOf("=") + 1 , uri.length);
            getLocalPathway(pathwayName);
        }
    }

    //TODO urgent comment needed with a rested mind !
    var collaborativeUsageCallback = function(postSuccess)
    {
        var realTimeManager = new RealTimeModule(postSuccess);

        var realTimeAuthCallback = function(response)
        {
            //Authentication fails initially, pop up authentication window
            if(response.error)
            {
                function popUpAuthHandler(response)
                {
                    //Authentication fails
                    if(response.error)
                        console.log(response.error);

                    //Authentication succesfull
                    var appInstance = new AppManager(true,realTimeManager);
                    realTimeManager.initRealTimeAPI();
                }

                //Trigger authentication
                realTimeManager.authorize(popUpAuthHandler, true);
            }
            else
            {
                //Authentication succesfull
                var appInstance = new AppManager(true,realTimeManager);
                realTimeManager.initRealTimeAPI();
            }
        }

        realTimeManager.authorize(realTimeAuthCallback, false);
    }
    
    var welPage = new WelcomePageView({
        el: $('.welcomePageContainer'),
        localUsageCallback: localUsageCallback,
        collaborativeUsageCallback: collaborativeUsageCallback
    }).render();

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
    }
});

