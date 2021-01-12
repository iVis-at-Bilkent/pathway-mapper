import React from 'react';
import {Modal, MenuItem, DropdownButton, Checkbox, Button} from 'react-bootstrap';
import { makeObservable, observable } from 'mobx';
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



    preparePortalAccess(studyId: string){
        this.portalAccessor.getSupportedGeneticProfiles(studyId, (data) => {
            this.disableAllDataTypes();
            // Iterate through profiles
            for(const profile of Object.keys(data)){
            const type = CBioPortalAccessor.getDataType(profile);
            if(type !== ""){
                this.dataTypes[type].enabled = true;
                this.dataTypes[type].profile = profile;
            }
            }
        });
    }

    disableAllDataTypes(){
        for(const dataType of Object.keys(this.dataTypes)){
        this.dataTypes[dataType].enabled = false;
        this.dataTypes[dataType].checked = false;
        this.dataTypes[dataType].profile = undefined;
        }
    }

    fetchStudy(){ 
        this.itemArray = [];


        this.portalAccessor.getDataTypes().forEach((dataType) => {
        this.dataTypes[dataType] = {enabled: false, checked: false, profile: undefined};
        });
    
        this.portalAccessor.fetchCancerStudies((cancerStudies: any) => {
        for(const study in cancerStudies){

            if(!cancerStudies.hasOwnProperty(study)){
            continue;
            }
            const item = <MenuItem key={study} onClick={() => {this.selectedStudyData = cancerStudies[study]; this.preparePortalAccess(cancerStudies[study][0]);}}>
            {cancerStudies[study][1]}
            </MenuItem>;
    
            this.itemArray.push(item);
        }
        });
        console.log(this.itemArray);
    }

    @autobind
    resetModal(){
        this.disableAllDataTypes();
        this.selectedStudyData = [];
    }

    @autobind
    handleCheckboxClick(dataType){
      this.dataTypes[dataType].checked = !this.dataTypes[dataType].checked;
      console.log(this.dataTypes[dataType].checked);
    }
    render(){
        return(
            <Modal id="cbioPortalModal" show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.STUDY); this.resetModal();}}>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Profile Data from cBioPortal</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div id="cancerDropDown">
                        <h4>Select Cancer Study</h4>
                        <DropdownButton id="dropdown-study" title={this.selectedStudyData[1] || "Choose study"}>
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