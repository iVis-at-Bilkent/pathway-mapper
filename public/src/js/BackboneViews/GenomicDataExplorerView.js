//Genomic data file part
$('#genomicDataInput').on('change', function()
{
    var file = this.files[0];
    // Create a new FormData object.
    var formData = new FormData();
    formData.append('graphFile', file);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function ()
    {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
        {
            window.editorActionsManager.addGenomicData(request.responseText);
        }
    };
    request.open("POST", "/loadGraph");
    request.send(formData);
    $('#genomicDataInput').val(null);
});

//Genomic data menu part
$(".dataDropdown li a").click(function(event)
{
    event.preventDefault();
    var dropdownLinkRole = $(event.target).attr('role');

    if (dropdownLinkRole == 'loadGenomic')
    {
        $('#genomicDataExplorerDiv').modal('show');
    }
});

var genomicDataExplorer = Backbone.View.extend(
    {
        cachedTpl: _.template($("#genomicDataExplorerTemplate").html()),
        events:
        {
            'click #load-genomic': 'loadGenomicDataHandler',
            'click #save-genomic': 'saveHandler',
        },
        initialize: function (options)
        {
            this.$el.append(this.cachedTpl());
            this.editorActionsManagerRef = options.editorActionsManager;
            this.editorActionsManagerRef.registerGenomicDataObserver(this);
        },
        render: function ()
        {
        },
        saveHandler: function(event)
        {
            var dataMap = {};
            this.$el.find('.genomicDataContentDiv label').each(function ()
            {
                var jqEl = $(this);
                var cancerType = jqEl.text();
                var isChecked = jqEl.find('input').is(':checked');
                dataMap[cancerType] = isChecked;
            });
            this.editorActionsManagerRef.updateGenomicDataVisibility(dataMap);

        },
        loadGenomicDataHandler: function()
        {
            $('#genomicDataInput').trigger('click');
        },
        //For observer observable pattern
        notify: function(data)
        {
            this.$el.find('.genomicDataContentDiv').empty();

            var cancerTypes = this.editorActionsManagerRef.genomicDataOverlayManager.visibleGenomicDataMapByType;
            this.$el.find('.genomicDataContentDiv').append('<h4 class="modal-title">Following genomic data will be overlaid on nodes from left to right:</h4>');
            var checkboxDiv = $('<div class="genomicChecboxDiv"></div>');
            for (var cancerType in cancerTypes)
            {
                var checkboxContent = $('<label class="checkbox"><input type="checkbox" value="">'+cancerType+'</label>');
                checkboxContent.find('input').attr('checked', cancerTypes[cancerType]);
                checkboxDiv.append(checkboxContent);
            }
            this.$el.find('.genomicDataContentDiv').append(checkboxDiv);

            console.log(cancerTypes);
        }
    });

module.exports = genomicDataExplorer;
