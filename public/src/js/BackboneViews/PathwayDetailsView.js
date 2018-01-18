var pathwayDetails = Backbone.View.extend(
{
    currentLayoutProperties: null,
    events:
    {
        'click #savePathwayDetails': 'saveHandler'
    },
    initialize: function (options)
    {
        this.properties =
        {
            pathwayName: "pathway.txt",
            pathwayTitle: "New Pathway",
            pathwayDescription: "",
            autoSizeNodesToContent: true
        };
        window.editorActionsManager.registerObserver(this);

    },
    saveHandler: function(event)
    {
        this.properties.pathwayName = this.$el.find("#pName").val();
        this.properties.pathwayTitle = this.$el.find("#pTitle").val();
        this.properties.pathwayDescription = this.$el.find("#pDesc").val();
        this.properties.autoSizeNodesToContent = this.$el.find("#autoSizeNodesToContent")[0].checked;
        this.$el.modal('toggle');
        window.editorActionsManager.saveGraphOptions({autoSizeNodesToContent: this.properties.autoSizeNodesToContent});
    },
    changeOptions: function(event)
    {
        this.$el.find("#autoSizeNodesToContent")[0].checked = this.properties.autoSizeNodesToContent;
    },
    updatePathwayProperties: function(data)
    {
        this.properties.pathwayName = data.fileName;
        this.properties.pathwayTitle = data.pathwayTitle;
        this.properties.pathwayDescription = data.pathwayDescription;
    },
    copyProperties: function (params)
    {
        this.currentLayoutProperties = _.clone(params);
    },
    render: function ()
    {
        this.template = _.template($("#pathwayDetailsTemplate").html());
        var tplContent = this.template(this.properties);
        this.$el.empty();
        this.$el.append(tplContent);
        this.delegateEvents();

        //Disable input enter event
        this.$el.find('input').on('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
        return this;
    },
    getPathwayData : function()
    {
        var pathwayData =
            {
                fileName: $("#pName").val(),
                pathwayTitle: $("#pTitle").val(),
                pathwayDescription: $("#pDesc").val(),
                autoSizeNodesToContent: this.$el.find("#autoSizeNodesToContent")[0].checked
            };

        return pathwayData;
    },
    notify: function()
    {
        //Editor actions manager notified us here, that means layout properties on editor actions manager
        //is changed. reflect it to view
        this.properties.autoSizeNodesToContent = window.editorActionsManager.graphOptions.autoSizeNodesToContent;
        this.changeOptions();
    }
});

module.exports = pathwayDetails;
