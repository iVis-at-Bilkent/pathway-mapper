var panzoomOptions = {
    zoomFactor: 0.05,
    zoomDelay: 45,
    minZoom: 0.1,
    maxZoom: 10,
    fitPadding: 50,
    panSpeed: 10,
    panDistance: 10,
    panDragAreaSize: 75,
    panMinPercentSpeed: 0.25,
    panInactiveArea: 8,
    panIndicatorMinOpacity: 0.5,
    zoomOnly: false,
    fitSelector: undefined,
    animateOnFit: function () {
        return false;
    },
    fitAnimationDuration: 1000,
    // icon class names
    sliderHandleIcon: 'fa fa-minus',
    zoomInIcon: 'fa fa-plus',
    zoomOutIcon: 'fa fa-minus',
    resetIcon: 'fa fa-expand'
};
module.exports = panzoomOptions;
//# sourceMappingURL=PanzoomOptions.js.map