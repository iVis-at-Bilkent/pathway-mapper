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
        $('#genomicDataInput').trigger('click');
    }
    else if (dropdownLinkRole == 'dataViewSettings')
    {
        $('#genomicDataExplorerDiv').modal('show');
    }
    else if(dropdownLinkRole == 'removeGenomicData')
    {
        window.editorActionsManager.removeGenomicData();
    }
});

var genomicDataExplorer = Backbone.View.extend(
    {
        cachedTpl: _.template($("#genomicDataExplorerTemplate").html()),
        events:
        {
            'click #save-genomic': 'saveHandler',
        },
        initialize: function (options)
        {
            this.$el.append(this.cachedTpl());
            this.editorActionsManagerRef = options.editorActionsManager;
            this.editorActionsManagerRef.registerGenomicDataObserver(this);
            this.renderEmptyView();
        },
        render: function ()
        {
        },
        renderEmptyView: function()
        {
            this.$el.find('.genomicDataContentDiv').append('<h4 class="modal-title">There is currently no data to show</h4>');
            this.$el.find('#save-genomic').hide();
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
        //For observer observable pattern
        notify: function(data)
        {
            this.$el.find('.genomicDataContentDiv').empty();

            var cancerTypes = this.editorActionsManagerRef.genomicDataOverlayManager.visibleGenomicDataMapByType;
            if(cancerTypes && Object.keys(cancerTypes).length === 0)
            {
                this.renderEmptyView();
            }
            else
            {
                this.$el.find('.genomicDataContentDiv').append('<h4 class="modal-title">Data Set To Show:</h4>');
                var checkboxDiv = $('<div class="genomicChecboxDiv"></div>');
                for (var cancerType in cancerTypes)
                {
                    var checkboxContent = $('<label class="checkbox"><input type="checkbox" value="">'+cancerType+'</label>');
                    checkboxContent.find('input').attr('checked', cancerTypes[cancerType]);
                    checkboxDiv.append(checkboxContent);
                }
                this.$el.find('.genomicDataContentDiv').append(checkboxDiv);
                this.$el.find('#save-genomic').show();
            }
        }
    });

module.exports = genomicDataExplorer;
