import autobind from "autobind-decorator";
import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import {
  Button, Checkbox, FormControl, ListGroup, ListGroupItem, Modal
} from "react-bootstrap";
import { EModalType, IDataTypeMetaData } from "../ui/react-pathway-mapper";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";

interface IStudyModalProps {
  isModalShown: boolean;
  loadFromCBio: Function;
  handleClose: Function;
}

@observer
export default class StudyModal extends React.Component<IStudyModalProps, {}> {
  @observable
  dataTypes: {[dataType: string]: IDataTypeMetaData} = {};

  currentlySelectedItemIndex = -1;

  @observable
  selectedStudies: {
    data: any[],
    dataTypes: {[dataType: string]: IDataTypeMetaData} 
  }[] = [];

  checkboxModalPosition: {
    bottom: number,
  } = {
    bottom: 0,
  }

  @observable
  selectedDataTypesPerStudy: string[];

  itemArray: any[];

  @observable
  searchQuery: string = "";

  @observable
  showDataTypeSelectionModal = false;

  @observable
  studyListItemCheckboxChecked: boolean[];

  @observable
  selectedStudyData: any[];
  
  @observable
  portalAccessor: CBioPortalAccessor;

  constructor(props: IStudyModalProps) {
    super(props);
    makeObservable(this);
    this.selectedStudyData = [];
    this.portalAccessor = new CBioPortalAccessor();
    this.fetchStudy();
  }

  @action.bound 
  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  @action.bound
  setSelectedStudyData(data: any[]) {
    this.selectedStudyData = data;
  }

  @action.bound
  setDataTypeProperties(dataType: string, properties: IDataTypeMetaData) {
    this.dataTypes[dataType] = properties;
  }

  @action.bound
  initStudyListItemCheckboxChecked(studyCount: number) {
    this.studyListItemCheckboxChecked = Array(studyCount).fill(false);
  }

  @action.bound 
  initSelectedDataTypesPerStudy(studyCount: number) {
    this.selectedDataTypesPerStudy = Array(studyCount).fill("");
  }

  @action.bound
  toggleStudyListItemCheckboxChecked(studyIndex: number) {
    this.studyListItemCheckboxChecked[studyIndex] = !this.studyListItemCheckboxChecked[studyIndex];
  }

  @action.bound
  addSelectedStudy(selectedStudy: {
    data: any[],
    dataTypes: {[dataType: string]: IDataTypeMetaData} 
  }) {
    this.selectedStudies.push(selectedStudy);
    console.log(this.selectedStudies);
  }

  @action.bound 
  removeSelectedStudy(selectedStudyData: any[]) {
    this.selectedStudies = this.selectedStudies.filter(study => study.data[0] != selectedStudyData[0]);
    console.log(this.selectedStudies);
  }

  @action.bound 
  clearSelectedStudies() {
    this.selectedStudies = [];
    console.log(this.selectedStudies);
  }

  @action.bound 
  setShowDataTypeSelectionModal(show: boolean) {
    this.showDataTypeSelectionModal = show;
  }

  @action.bound
  clearStudyCheckboxesChecked() {
    const length = this.studyListItemCheckboxChecked.length;
    this.studyListItemCheckboxChecked = Array(length).fill(false);
  }

  @action.bound 
  clearSelectedDataTypesPerStudy() {
    const length = this.studyListItemCheckboxChecked.length;
    this.selectedDataTypesPerStudy = Array(length).fill("");
  }

  @action.bound 
  unselectDataTypesForStudy(index: number) {
    this.selectedDataTypesPerStudy[index] = "";
  }

  preparePortalAccess(studyId: string) {
    this.portalAccessor.getSupportedGeneticProfiles(studyId, (data) => {
      this.disableAllDataTypes();
      // Iterate through profiles
      for (const profile of Object.keys(data)) {
        const type = CBioPortalAccessor.getDataType(profile);
        if (type !== "") {
          this.setDataTypeProperties(type, {
            ...this.dataTypes[type],
            enabled: true,
            profile: profile,
          });
        }
      }
    });
  }

  disableAllDataTypes() {
    for (const dataType of Object.keys(this.dataTypes)) {
      this.setDataTypeProperties(dataType, {
        enabled: false,
        checked: false,
        profile: undefined,
      });
    }
  }

  fetchStudy() {
    this.itemArray = [];

    this.portalAccessor.getDataTypes().forEach((dataType) => {
      this.setDataTypeProperties(dataType, {
        enabled: false,
        checked: false,
        profile: undefined,
      });
    });

    this.portalAccessor.fetchCancerStudies((cancerStudies: any) => {
      for (const studyTitle in cancerStudies) {
        if (!cancerStudies.hasOwnProperty(studyTitle)) {
          continue;
        }
        const studyData = cancerStudies[studyTitle];
        this.itemArray.push(studyData);
      }
      this.initStudyListItemCheckboxChecked(this.itemArray.length);
      this.initSelectedDataTypesPerStudy(this.itemArray.length);
    });
  }

  @autobind
  resetModal() {
    this.disableAllDataTypes();
    this.setSelectedStudyData([]);
    this.clearSelectedStudies();
    this.clearStudyCheckboxesChecked();
    this.clearSelectedDataTypesPerStudy();
    this.currentlySelectedItemIndex = -1;
  }

  @autobind
  handleCheckboxClick(dataType) {
    this.setDataTypeProperties(dataType, {
      ...this.dataTypes[dataType],
      checked: !this.dataTypes[dataType].checked,
    });
  }

  @computed
  get selectedStudyDataTitle() {
    if (this.selectedStudyData.length > 1) {
      return this.selectedStudyData[1] || "Choose study";
    } else {
      return "Choose study";
    }
  }

  render() {
    return (
      <Modal
        id="cbioPortalModal"
        show={this.props.isModalShown}
        onHide={() => {
          this.props.handleClose(EModalType.STUDY);
          this.resetModal();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile Data from cBioPortal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="cancerDropDown">
            <h4>Select Cancer Study</h4>
            <form>
            <FormControl
              type="text"
              placeholder="Search studies"
              // @ts-ignore
              onChange={(event) => this.setSearchQuery(event.target.value)}
            />
            </form>
            <ListGroup
              style={{
                maxHeight: '200px',
                overflow: 'auto',
                marginTop: '10px',
                border: '1px solid #888'
              }}
            >
              {this.itemArray.map((item, index) => {return {item: item, index: index}})
                            .filter(obj => obj.item[1].toLowerCase().includes(this.searchQuery.toLowerCase()))
                            .map((obj)  => {
                const item = obj.item;
                const index = obj.index;
                
                const studyTitle = item[1];
                const studyId = item[0];
                return (
                  <ListGroupItem
                    id={"listgroupitem" + index}
                    key={studyId}
                    style={{
                      padding: "5px 5px"
                    }}>
                      <Checkbox
                        checked={this.studyListItemCheckboxChecked[index]}
                        onClick={() => {
                          const boundingRect = document.getElementById("listgroupitem" + index).getBoundingClientRect();
                          const modalMargin = 30;
                          this.checkboxModalPosition = {
                            bottom: boundingRect.bottom - modalMargin,
                          }
                          this.setSelectedStudyData(item);
                          this.preparePortalAccess(studyId);
                          this.toggleStudyListItemCheckboxChecked(index);
                          this.currentlySelectedItemIndex = index;

                          if (this.studyListItemCheckboxChecked[index]) {
                            this.setShowDataTypeSelectionModal(true);
                          }
                          else {
                            this.removeSelectedStudy(item);
                            this.unselectDataTypesForStudy(index);
                          }
                        }}
                        >
                        {studyTitle}
                      </Checkbox> 
                      {this.selectedDataTypesPerStudy[index] != "" && 
                      <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "25px",
                      }
                      }>
                        {this.selectedDataTypesPerStudy[index]}
                      </span>}
                  </ListGroupItem>
                )
              })}
            </ListGroup>
            
          </div>
          <Modal
            style={{
              position: 'absolute',
              top: this.checkboxModalPosition.bottom + 'px'
            }}
            dialogClassName="fitContent"
            show={this.showDataTypeSelectionModal}
            onHide={() => {
              this.setShowDataTypeSelectionModal(false);
            }
            }>
            <Modal.Body>
            {Object.keys(this.dataTypes).map((dataType: string) => {
              return (
                <Checkbox
                  inline 
                  key={dataType}
                  disabled={!this.dataTypes[dataType].enabled}
                  onClick={() => {
                    this.handleCheckboxClick(dataType);
                  }}
                  checked={this.dataTypes[dataType].checked}
                >
                  {dataType}
                </Checkbox>
              );
            })}
            </Modal.Body>
            <Modal.Footer>
            <Button
                onClick={() => {
                  const currentDataTypes = {...this.dataTypes};
                  const selectedCount = Object.keys(currentDataTypes).filter(dataType => {
                    return currentDataTypes[dataType].checked;
                  }).length;
                  if (selectedCount == 0) {
                    this.studyListItemCheckboxChecked[this.currentlySelectedItemIndex] = false;
                  }
                  this.setShowDataTypeSelectionModal(false);
                }}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  const currentDataTypes = {...this.dataTypes}
                  this.addSelectedStudy({
                    data: this.selectedStudyData,
                    dataTypes: currentDataTypes
                  });
                  this.selectedDataTypesPerStudy[this.currentlySelectedItemIndex] = Object.keys(currentDataTypes).filter(dataType => {
                    return currentDataTypes[dataType].checked;
                  }).join(", ");
                  this.setShowDataTypeSelectionModal(false);
                }}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>

          <br />
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsClass="success"
            onClick={() => {
              this.selectedStudies.forEach(study => {
                this.props.loadFromCBio(study.dataTypes, study.data);
              });
              this.props.handleClose(EModalType.STUDY);
              this.resetModal();
            }}
          >
            Load Data
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
