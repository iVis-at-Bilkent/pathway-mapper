export default class GenomicDataOverlayManager {
    genomicDataMap: {};
    visibleGenomicDataMapByType: {};
    groupedGenomicDataCount: number;
    groupedGenomicDataMap: {};
    private DEFAULT_VISIBLE_GENOMIC_DATA_COUNT;
    private MAX_VISIBLE_GENOMIC_DATA_COUNT;
    private observers;
    private cy;
    constructor(cy: any);
    getEmptyGroupID(): number;
    addGenomicDataLocally(genomicData: any, groupID: any): void;
    preparePortalGenomicDataShareDB(genomicData: any): {
        genomicDataMap: {};
        visibilityMap: {};
    };
    addGenomicData(data: any): void;
    removeGenomicVisData(): void;
    addGenomicDataWithGeneSymbol(geneSymbol: any, data: any): void;
    addGenomicGroupData(groupID: any, data: any): void;
    addPortalGenomicData(data: any, groupID: any): void;
    clearAllGenomicData: () => void;
    removeGenomicData(): void;
    removeGenomicDataWithGeneSymbol(geneSymbol: any): void;
    addGenomicVisData(key: any, data: any): void;
    prepareGenomicDataShareDB: (genomicData: any) => {
        genomicDataMap: {};
        visibilityMap: {};
    };
    updateGenomicDataVisibility: (_key: any, isVisible: any) => void;
    hideGenomicData: () => void;
    countVisibleGenomicDataByType(): number;
    generateSVGForNode(ele: any): any;
    getRequiredWidthForGenomicData(genomicDataBoxCount: any): number;
    showGenomicData(): void;
    parseGenomicData(genomicData: any, groupID: any): void;
    registerObserver(observer: any): void;
    notifyObservers(): void;
}
