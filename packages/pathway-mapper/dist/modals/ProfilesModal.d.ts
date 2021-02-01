import React from "react";
import EditorActionsManager from "../managers/EditorActionsManager";
import { IProfileMetaData } from "../ui/react-pathway-mapper";
interface IProfilesModalProps {
    profiles: IProfileMetaData[];
    editor: EditorActionsManager;
    isModalShown: boolean;
    handleClose: Function;
    handleProfileLabelClicked: (index: number) => void;
}
export default class ProfilesModal extends React.Component<IProfilesModalProps, {}> {
    constructor(props: IProfilesModalProps);
    get profileEnabledMap(): {};
    handleProfileLabelClicked(index: number): void;
    render(): JSX.Element;
}
export {};
