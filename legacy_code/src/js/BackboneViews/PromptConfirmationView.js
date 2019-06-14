var promptConfirmationView = Backbone.View.extend(
    {
        initialize: function (options)
        {
            var self = this;
            self.template = _.template($("#promptConfirmationTemplate").html());
        },
        render: function (nextFunction)
        {
            var self = this;
            self.template = _.template($("#promptConfirmationTemplate").html());

            var tplContent = self.template({jsVariable: "hello"});
            self.$el.empty();
            self.$el.append(tplContent);
            self.delegateEvents();

            if (nextFunction != undefined)
            {
                $(self.el).html(self.template);
                $(self.el).modal('show');


                $(document).off("click", "#promptConfirmationAccept").on("click", "#promptConfirmationAccept", function (evt) {
                    nextFunction();
                    $(self.el).modal('toggle');
                });

                $(document).off("click", "#promptConfirmationCancel").on("click", "#promptConfirmationCancel", function (evt) {
                    $(self.el).modal('toggle');
                });
            }
            return this;
        }
    });


module.exports = promptConfirmationView;