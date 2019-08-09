module.exports = (function ($)
{
    
    function NotificationFactory()
    {
    }

    function mapTypeToCSSStyle(type)
    {
        if (type === "success")
            return "pathwayMapper-success"
        else if (type === "fail")
            return "pathwayMapper-fail"
            
    }
    
    NotificationFactory.prototype.createNotification = function(message, type)
    {

        var mappedCSSClass = mapTypeToCSSStyle(type);

        $.notify({
            // options
            icon: (type == "success") ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-info-sign',
            message: message
        },{
            // settings
            element: 'body',
            position: null,
            type: mappedCSSClass,
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "bottom",
                align: "right"
            },
            delay: 5000,
            offset: 20,
            spacing: 10,
            z_index: 1031,
            mouse_over: null,
            animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOut'
            }
        });
    }

    return new NotificationFactory();

})(window.$);