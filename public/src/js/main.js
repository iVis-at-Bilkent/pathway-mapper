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


//Wait all components to load
$(window).load(function()
{
    var localUsageCallback = function(postSuccess)
    {
        var appInstance = new AppManager(false);
        postSuccess();
    }

    //TODO urgent comment needed with a rested mind !
    var collaborativeUsageCallback = function(postSuccess)
    {
        var realTimeManager = new RealTimeModule(postSuccess);

        var realTimeAuthCallback = function(response)
        {
            if(response.error)
            {
                function popUpAuthHandler(response)
                {
                    if(response.error)
                        console.log(response.error);
                    
                    var appInstance = new AppManager(true,realTimeManager);
                    realTimeManager.initRealTimeAPI();
                }
                realTimeManager.authorize(popUpAuthHandler, true);
            }
            else
            {
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

    //TODO SHAME ! ! !
    var uri = window.location.search;
    if (uri.length > 0)
    {
        $('.landingContent h3').hide();
        $('.welPageButtons').hide();
        $('#collaborativeUsage').click();
        $('.continueButton').click().hide();
    }
});

