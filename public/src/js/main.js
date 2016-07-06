//Import node modules here !
var $ = window.$ = window.jQuery = require('jquery');
var _ = window._ = require('underscore');
var Backbone = window.Backbone = require('backbone');
Backbone.$ = $;
require('bootstrap');
require('./RealTimeUtils');//Google's real time utility lib

var WelcomePageView = require('./Views/WelcomePageView.js');
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


//Selected element on dropdown
$(".edge-palette a").click(function(event)
{
    event.preventDefault();

    if ($(event.target).hasClass('active'))
    {
        cy.edgehandles('disable');
        cy.edgehandles('drawoff');
        $('.edge-palette a').blur().removeClass('active');
    }
    else
    {
        $('.edge-palette a').blur().removeClass('active');
        $(event.target).toggleClass('active');
        window.edgeAddingMode = $(event.target).attr('edgeTypeIndex');
        cy.edgehandles('enable');
    }

});


//About edit drop down handler
$(".editDropDown li a").click(function(event)
{
    event.preventDefault();
    var dropdownLinkRole = $(event.target).attr('role');

    if (dropdownLinkRole == 'addGene')
    {
        var clickedNodeType = $(event.target).text();
        cy.add(
            {
                group: "nodes",
                data: {type: clickedNodeType.toUpperCase(), name:'New ' + clickedNodeType },
                renderedPosition:
                {
                    x: 100,
                    y: 100
                }
            });
    }
    else if (dropdownLinkRole == 'addEdge')
    {
        var edgeTypeIndex = $(event.target).attr('edgeTypeIndex');
        $('.edge-palette a').blur().removeClass('active');
        $('.edge-palette a[edgeTypeIndex="'+edgeTypeIndex+'"]').addClass('active');
        window.edgeAddingMode = edgeTypeIndex;
        cy.edgehandles('enable');
    }
    else
    //delete
    {
        cy.elements(':selected').remove();
    }
});


//About drop down handler
$(".layoutDropDown li a").click(function(event)
{
    event.preventDefault();
    var dropdownLinkRole = $(event.target).attr('role');

    if (dropdownLinkRole == 'perform_layout')
    {
        cy.layout(window.layoutProperties.currentLayoutProperties);
    }
    else if (dropdownLinkRole == 'layout_properties')
    {
        $('#layoutPropertiesDiv').modal('show');
    }

});


//About drop down handler
$(".aboutDropDown li a").click(function(event)
{
    event.preventDefault();
    var dropdownLinkRole = $(event.target).attr('role');

    if (dropdownLinkRole == 'about')
    {
        $('#aboutModal').modal('show');
    }
    else if (dropdownLinkRole == 'edge_legend')
    {
        $('#edge_legend_modal').modal('show');
    }
    else if (dropdownLinkRole == 'node_legend')
    {
        $('#node_legend_modal').modal('show');
    }
    else if(dropdownLinkRole == 'help')
    {
        $('#quickHelpModal').modal('show');
    }
});
