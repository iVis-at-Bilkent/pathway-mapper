/// <reference types="jquery" />
import "tippy.js/dist/tippy.css";
import { IColorValueMap } from "../ui/react-pathway-mapper";
export default class GenomicDataOverlayManager {
    genomicDataMap: {};
    visibleGenomicDataMapByType: {};
    groupedGenomicDataCount: number;
    groupedGenomicDataMap: {};
    patientData: any;
    private DEFAULT_VISIBLE_GENOMIC_DATA_COUNT;
    private observers;
    private cy;
    private colorScheme;
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
    updateColorScheme(colorValueMap: IColorValueMap): void;
    showGenomicData(resizeNodeCallback?: (node: any) => void): void;
    parseGenomicData(genomicData: any, groupID: any): void;
    registerObserver(observer: any): void;
    notifyObservers(): void;
    getAlterationCountForPatient(geneData: any): number;
    showPatientData(): void;
    getOncoprintColors(selectedGene: any): any;
    generateSVGForPatientNode(ele: any, patientData: any): any;
    generateOncoprintForPatientNode(ele: any): any;
    getCNADisplayString(alterationTypeKey: number): string;
    generateSvgIconForSample(iconColor: string, iconText: string): string;
    generateHTMLContentForNodeTooltip(ele: any, patientData: any): JQuery<HTMLElement>;
}
