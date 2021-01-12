import React from "react";
import { IProfileMetaData } from "../ui/react-pathway-mapper";
import EditorActionsManager from "../managers/EditorActionsManager";
interface IProfilesModalProps {
    profiles: IProfileMetaData[];
    editor: EditorActionsManager;
    isModalShown: boolean;
    handleClose: Function;
}
export default class ProfilesModal extends React.Component<IProfilesModalProps, {}> {
    constructor(props: IProfilesModalProps);
    get profileEnabledMap(): {};
    render(): JSX.Element;
}
export {};
