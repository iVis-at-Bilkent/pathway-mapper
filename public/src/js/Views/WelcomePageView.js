var WelcomePageView = Backbone.View.extend(
    {
        cachedTpl: _.template($("#welcomePageTemplate").html()),
        events:
        {
            'click #localUsage': 'localUsageHandler',
            'click #collaborativeUsage': 'collaborativeUsageHandler'
        },
        initialize: function (options)
        {
            this.localUsageCallback = options.localUsageCallback;
            this.collaborativeUsageCallback = options.collaborativeUsageCallback;
        },
        render: function ()
        {
            this.$el.empty();
            this.$el.append(this.cachedTpl());
        },
        localUsageHandler: function(event)
        {
            this.$el.find('.welcomePageLoading').fadeIn();
            var self = this;
            function postHandler()
            {
                self.postSuccess();
            }
            this.localUsageCallback(postHandler);
        },
        collaborativeUsageHandler: function(event)
        {
            var self = this;
            this.$el.find('.welcomePageLoading').show();
            function postHandler()
            {
                self.postSuccess();
            }

            this.collaborativeUsageCallback(postHandler);
        },
        postSuccess: function()
        {
            this.$el.empty();
            this.$el.fadeOut();
        }
    });

module.exports = WelcomePageView;
