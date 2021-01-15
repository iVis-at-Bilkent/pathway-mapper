import React from 'react';
import {Modal, MenuItem, DropdownButton, Checkbox, Button} from 'react-bootstrap';
import { action, computed, makeObservable, observable } from 'mobx';
import autobind from 'autobind-decorator';
import { IDataTypeMetaData, EModalType } from '../ui/react-pathway-mapper';
import CBioPortalAccessor from '../utils/CBioPortalAccessor';
import { observer } from 'mobx-react';

interface IStudyModalProps {
    isModalShown: boolean;
    loadFromCBio : Function;
    handleClose : Function;
}

@observer
export default class StudyModal extends React.Component<IStudyModalProps, {}>{

    @observable
    dataTypes: {[dataType: string]: IDataTypeMetaData} = {};
    
    itemArray: any[];
    
    @observable
    selectedStudyData: any[];
    @observable
    portalAccessor: CBioPortalAccessor;

    constructor(props: IStudyModalProps){
        super(props);
        makeObservable(this);

        this.selectedStudyData = [];
        this.portalAccessor = new CBioPortalAccessor();
        this.fetchStudy();
    }

    @action.bound
    setSelectedStudyData(data: any[]) {
        this.selectedStudyData = data;
    }

    @action.bound
    setDataTypeProperties(dataType: string, properties: IDataTypeMetaData) {
        this.dataTypes[dataType] = properties;
    }

    preparePortalAccess(studyId: string){
        this.portalAccessor.getSupportedGeneticProfiles(studyId, (data) => {
            this.disableAllDataTypes();
            // Iterate through profiles
            for(const profile of Object.keys(data)){
            const type = CBioPortalAccessor.getDataType(profile);
            if(type !== ""){
                this.setDataTypeProperties(type, {
                    ...this.dataTypes[type], 
                    enabled: true, 
                    profile: profile
                });
            }
            }
        });
    }

    disableAllDataTypes(){
        for(const dataType of Object.keys(this.dataTypes)){
            this.setDataTypeProperties(dataType, {
                enabled: false,
                checked: false,
                profile: undefined
            });
        }
    }

    fetchStudy(){ 
        this.itemArray = [];


        this.portalAccessor.getDataTypes().forEach((dataType) => {
            this.setDataTypeProperties(dataType, {
                enabled: false,
                checked: false,
                profile: undefined
            });
        });
    
        this.portalAccessor.fetchCancerStudies((cancerStudies: any) => {
        for(const study in cancerStudies){

            if(!cancerStudies.hasOwnProperty(study)){
                continue;
            }
            const item = <MenuItem 
                            key={study} 
                            onClick={() => {
                                this.setSelectedStudyData(cancerStudies[study]); 
                                this.preparePortalAccess(cancerStudies[study][0]);
                            }}>
                            {cancerStudies[study][1]}
                        </MenuItem>;
    
            this.itemArray.push(item);
        }
        });
    }

    @autobind
    resetModal(){
        this.disableAllDataTypes();
        this.setSelectedStudyData([]);
    }

    @autobind
    handleCheckboxClick(dataType){
        this.setDataTypeProperties(dataType, {
            ...this.dataTypes[dataType],
            checked: !this.dataTypes[dataType].checked
        });
    }

    @computed
    get selectedStudyDataTitle() {
        if (this.selectedStudyData.length > 1) {
            return this.selectedStudyData[1] || "Choose study";
        }
        else {
            return "Choose study";
        }
    }

    render(){
        return(
            <Modal id="cbioPortalModal" show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.STUDY); this.resetModal();}}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile Data from cBioPortal</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div id="cancerDropDown">
                        <h4>Select Cancer Study</h4>
                        <DropdownButton id="dropdown-study" title={this.selectedStudyDataTitle}>
                        {this.itemArray}
                        </DropdownButton>
                    </div>
                    { Object.keys(this.dataTypes).map((dataType: string) => {
                        return <Checkbox key={dataType} disabled={!this.dataTypes[dataType].enabled} 
                        onClick={() => {this.handleCheckboxClick(dataType);}} checked={this.dataTypes[dataType].checked}> 
                                {dataType}
                                </Checkbox>;
                    })
                    }
                    
                    <br/>
                </Modal.Body>

                <Modal.Footer>
                    <Button bsClass="success" 
                    onClick={() => {this.props.loadFromCBio(this.dataTypes, this.selectedStudyData); this.props.handleClose(EModalType.STUDY); this.resetModal();}}>Load Data</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}