import React from "react";
import {Label, Modal} from "react-bootstrap";
import { observer } from "mobx-react";
import { IProfileMetaData, EModalType } from "../ui/react-pathway-mapper";
import EditorActionsManager from "../managers/EditorActionsManager";
import { computed, makeObservable } from "mobx";
interface IProfilesModalProps {
    profiles: IProfileMetaData[];
    editor: EditorActionsManager;
    isModalShown: boolean;
    handleClose: Function;
}

@observer
export default class ProfilesModal extends React.Component<IProfilesModalProps, {}>{

    constructor(props: IProfilesModalProps){
        super(props);

        makeObservable(this);
    }

    @computed get profileEnabledMap(){
        const profileEnabledMap = {};
        this.props.profiles.forEach((profile: IProfileMetaData) => {profileEnabledMap[profile.profileId] = profile.enabled});
        console.log(profileEnabledMap);
        return profileEnabledMap;
    }

    render(){
        

        const profileLabels = this.props.profiles.map((profile: IProfileMetaData, i: number) => 
        [<Label onClick={() => {
          this.props.profiles[i].enabled = !this.props.profiles[i].enabled;
          this.props.editor.updateGenomicDataVisibility(this.profileEnabledMap);
          }}
          onMouseEnter={() => {document.body.style.cursor = "pointer";}}
          onMouseLeave={() => {document.body.style.cursor = "default";}}
          style={{fontSize: "85%"}}
          bsStyle={this.props.profiles[i].enabled ? "primary" : "default"}>{profile.profileId}
          </Label>, <br/>, <br/>]);

        return (

            <Modal show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.PROFILES)}}>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Genomic Data Set(s) to Show</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(profileLabels.length > 0 ? profileLabels : <h4 className="modal-title">There is currently no data to show</h4>)}
                </Modal.Body>
            </Modal>

        )
    }

}