import { computed, makeObservable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Label, Modal } from "react-bootstrap";
import EditorActionsManager from "../managers/EditorActionsManager";
import { EModalType, IProfileMetaData } from "../ui/react-pathway-mapper";
interface IProfilesModalProps {
    profiles: IProfileMetaData[];
    editor: EditorActionsManager;
    isModalShown: boolean;
    handleClose: Function;
    handleProfileLabelClicked: (index: number) => void; 
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
        return profileEnabledMap;
    }

    handleProfileLabelClicked(index: number) {
        this.props.handleProfileLabelClicked(index);
    }

    render(){
        

        const profileLabels = this.props.profiles.map((profile: IProfileMetaData, i: number) => 
            <React.Fragment key={i}>
                <Label 
                    onClick={() => {
                        this.handleProfileLabelClicked(i);
                        this.props.editor.updateGenomicDataVisibility(this.profileEnabledMap);
                    }}
                    onMouseEnter={() => {document.body.style.cursor = "pointer";}}
                    onMouseLeave={() => {document.body.style.cursor = "default";}}
                    style={{fontSize: "85%"}}
                    bsStyle={this.props.profiles[i].enabled ? "primary" : "default"}>{profile.profileId}
                </Label>
                <br/>
                <br/>
            </React.Fragment>
        );

        return (

            <Modal show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.PROFILES)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Genomic Data Set(s) to Show</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(profileLabels.length > 0 ? profileLabels : <h4 className="modal-title">There is currently no data to show</h4>)}
                </Modal.Body>
            </Modal>

        )
    }

}