import React from "react";
import EditorActionsManager from "../managers/EditorActionsManager";
import { IProfileMetaData } from "../ui/react-pathway-mapper";
interface IProfilesModalProps {
    profiles: IProfileMetaData[];
    editor: EditorActionsManager;
    show: boolean;
    handleClose: Function;
    handleProfileLabelClicked: (index: number) => void;
    enabledProfileCountLimit: number;
}
export default class ProfilesModal extends React.Component<IProfilesModalProps, {}> {
    showEnabledProfileWarningModal: boolean;
    constructor(props: IProfilesModalProps);
    setShowEnabledProfileWarningModal(val: boolean): void;
    get profileEnabledMap(): {};
    handleProfileLabelClicked(index: number): void;
    render(): JSX.Element;
}
export {};
