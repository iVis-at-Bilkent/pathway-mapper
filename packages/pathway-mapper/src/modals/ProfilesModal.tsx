import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import EditorActionsManager from "../managers/EditorActionsManager";
import { EModalType, IProfileMetaData } from "../ui/react-pathway-mapper";
interface IProfilesModalProps {
  profiles: IProfileMetaData[];
  editor: EditorActionsManager;
  show: boolean;
  handleClose: Function;
  handleProfileLabelClicked: (index: number) => void;
  enabledProfileCountLimit: number;
}

@observer
export default class ProfilesModal extends React.Component<
  IProfilesModalProps,
  {}
> {


  @observable
  showEnabledProfileWarningModal: boolean = false;

  constructor(props: IProfilesModalProps) {
    super(props);

    makeObservable(this);
  }

  @action
  setShowEnabledProfileWarningModal(val: boolean) {
    this.showEnabledProfileWarningModal = val;
  }

  @computed get profileEnabledMap() {

    const enabledProfiles: IProfileMetaData[] = [];
    this.props.profiles.forEach(profile => {
      if (profile.enabled && enabledProfiles.length < this.props.enabledProfileCountLimit) {
        enabledProfiles.push(profile);
      }
    });

    const profileEnabledMap = {};
    this.props.profiles.forEach((profile: IProfileMetaData) => {
      const enabled = enabledProfiles.indexOf(profile) > -1;
      profileEnabledMap[profile.profileId] = enabled;
    });
    return profileEnabledMap;
  }

  handleProfileLabelClicked(index: number) {
    this.props.handleProfileLabelClicked(index);
  }

  render() {
    const profileLabels = this.props.profiles.map(
      (profile: IProfileMetaData, i: number) => (
        <React.Fragment key={i}>
          <Button
            onClick={() => {
              const enabledProfileCount = this.props.profiles.filter(profile => profile.enabled).length;
              if (this.props.profiles[i].enabled || enabledProfileCount < this.props.enabledProfileCountLimit) {
                this.handleProfileLabelClicked(i);
                this.props.editor.updateGenomicDataVisibility(
                  this.profileEnabledMap
                );
              }
              else {
                this.setShowEnabledProfileWarningModal(true);
              }
            }}
            style={{
              cursor: "pointer",
              margin: "10px"
            }}
            bsStyle={this.props.profiles[i].enabled ? "primary" : "default"}
          >
            {profile.profileId}
          </Button>
        </React.Fragment>
      )
    );

    return (
      <Modal
        show={this.props.show}
        onHide={() => {
          this.props.handleClose(EModalType.PROFILES);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Genomic Data Set(s) to Show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {profileLabels.length > 0 ? (
            profileLabels
          ) : (
            <h4 className="modal-title">There is currently no data to show</h4>
          )}
          <Modal
            show={this.showEnabledProfileWarningModal}
            onHide={() => this.setShowEnabledProfileWarningModal(false)}>
            <Modal.Header closeButton>
              Warning
            </Modal.Header>
            <Modal.Body>
              <p>At most 6 data sets can be displayed at the same time, please disable some other data set before enabling this.</p>
            </Modal.Body>
            <Modal.Footer>
            <Button
                onClick={() => {
                  this.setShowEnabledProfileWarningModal(false);
                }}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Modal.Body>
      </Modal>
    );
  }
}
