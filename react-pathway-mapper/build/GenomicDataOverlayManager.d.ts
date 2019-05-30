export default class GenomicDataOverlayManager {
    getEmptyGroupID(): void;
    showGenomicData(): void;
    updateGenomicDataVisibility(_key: string, dataMapElement: any): void;
    registerObserver(observer: any): void;
    countVisibleGenomicDataByType(): number;
    notifyObservers(): void;
}
