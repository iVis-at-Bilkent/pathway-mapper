export default class GridOptionsManager {
    defaultGridGuideOptions: any;
    currentProperties: any;
    cy: any;
    constructor(cy: any);
    changeParameters(params: any): void;
    getCurrentOptions(): any;
    getDefaultOptions(): any;
    setSnapToGuidelines(state: any): void;
    setShowGrid(state: any): void;
    refreshGridOptionsExtension(): void;
}
