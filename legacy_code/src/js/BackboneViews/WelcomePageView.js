var WelcomePageView = Backbone.View.extend(
    {
        cachedTpl: _.template($("#welcomePageTemplate").html()),
        events:
        {
            'click #localUsage': 'localUsageHandler',
            'click #collaborativeUsage': 'collaborativeUsageHandler',
            'click #cBioPortalUsage': 'cBioPortalUsageHandler',
            'click .continueButton': 'continueButtonHandler'
        },
        initialize: function (options)
        {
            this.localUsageCallback = options.localUsageCallback;
            this.collaborativeUsageCallback = options.collaborativeUsageCallback;
            this.cBioPortalUsageCallback = options.cBioPortalUsageCallback;

            this.modelSelectionMap =
            {
                NONE: -1,
                LOCAL: 0,
                COLLAB: 1,
                CBIO: 2,
            };

            this.modelSelection = this.modelSelectionMap.NONE;

        },
        render: function ()
        {
            this.$el.empty();
            this.$el.append(this.cachedTpl());

            this.$el.find('#localUsage').popover({
                container: 'body',
                content: 'Create a pathway individually',
                placement: 'left',
                delay: 100,
                trigger: 'manual'
            });

            this.$el.find('#collaborativeUsage').popover({
                container: 'body',
                html : true,
                content: function(){
                    return $('#collaborativePopoverContent').html();
                },
                placement: 'middle',
                delay: 200,
                trigger: 'manual'
            });

            this.$el.find('#cBioPortalUsage').popover({
                container: 'body',
                content: 'Open in cBioPortal View',
                placement: 'right',
                delay: 100,
                trigger: 'manual'
            });

        },
        localUsageHandler: function(event)
        {
            if(this.modelSelection == this.modelSelectionMap.LOCAL)
                return;

            $('.popover').popover('hide');
            this.$el.find('.welcomePageCheckable').removeClass('active');
            $(event.currentTarget).addClass('active');
            this.$el.find('#localUsage').popover('show');
            this.$el.find('.continueRow').css('visibility', 'visible');
            this.modelSelection = this.modelSelectionMap.LOCAL;
        },
        collaborativeUsageHandler: function(event)
        {
            if(this.modelSelection == this.modelSelectionMap.COLLAB)
                return;

            $('.popover').popover('hide');
            this.$el.find('.welcomePageCheckable').removeClass('active');
            $(event.currentTarget).addClass('active');
            this.$el.find('#collaborativeUsage').popover('show');
            this.$el.find('.continueRow').css('visibility', 'visible');
            this.modelSelection = this.modelSelectionMap.COLLAB;
        },
        cBioPortalUsageHandler: function(event)
        {
            if(this.modelSelection == this.modelSelectionMap.CBIO)
                return;

            $('.popover').popover('hide');
            this.$el.find('.welcomePageCheckable').removeClass('active');
            $(event.currentTarget).addClass('active');
            this.$el.find('#cBioPortalUsage').popover('show');
            this.$el.find('.continueRow').css('visibility', 'visible');
            this.modelSelection = this.modelSelectionMap.CBIO;
        },
        continueButtonHandler: function(event)
        {
            $('.popover').hide();
            var self = this;
            this.$el.find('.welcomePageLoading').show();
            function postHandler()
            {
                self.postSuccess();
            }

            if(this.modelSelection != this.modelSelectionMap.NONE)
            {
                if(this.modelSelection == this.modelSelectionMap.LOCAL)
                {
                    this.localUsageCallback(postHandler);
                }
                else if(this.modelSelection == this.modelSelectionMap.COLLAB)
                {
                    this.collaborativeUsageCallback(postHandler);
                }
                else if(this.modelSelection == this.modelSelectionMap.CBIO)
                {
                    this.cBioPortalUsageCallback(postHandler);
                }
            }
        },
        postSuccess: function()
        {
            this.$el.empty();
            this.$el.fadeOut(800);
        }
    });

module.exports = WelcomePageView;
