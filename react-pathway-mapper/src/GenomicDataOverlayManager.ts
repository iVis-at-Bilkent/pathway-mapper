export default class GenomicDataOverlayManager {
  getEmptyGroupID() {}
  showGenomicData() {}
  // @ts-ignore
  updateGenomicDataVisibility(_key: string, dataMapElement: any) {}

  registerObserver(observer: any) {
    console.log(observer)
  }
  countVisibleGenomicDataByType() {
    return 0
  }
  notifyObservers() {}
}
