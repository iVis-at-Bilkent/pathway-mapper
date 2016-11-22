var cbioPortalAccessView = Backbone.View.extend(
    {
        events:
        {
        },
        initialize: function (options)
        {
            this.cancerStudies = options.cancerStudies;
        },
        render: function ()
        {
            this.$el.find("#cancerDropDown").empty();
            
            var cancerStudiesDropDown = $('<select  id="cancerSelectBox" class="selectpicker" title="Select a Cancer Study"></select>');

            for (var cancerName in this.cancerStudies)
            {
                cancerStudiesDropDown.append('<option key='+ cancerName +'>' +
                    this.cancerStudies[cancerName][1]
                    + '</option>');
            }

            $("#cancerDropDown").append(cancerStudiesDropDown);
            cancerStudiesDropDown.selectpicker({
                    liveSearch: true,
                    container: "body",
                    liveSearchPlaceholder: "Search Cancer Study"
            });

            $('#cancerSelectBox').change(function ()
            {
                var key = $(this).find("option:selected").attr('key');
                console.log(key);

                //TODO create checkboxes for data type !
            });

            this.$el.modal('show');
        }
    });

module.exports = cbioPortalAccessView;
