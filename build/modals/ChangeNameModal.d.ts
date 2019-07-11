import React from "react";
import PathwayActions from "../PathwayActions";
interface IChangeNameModalProps {
    pathwayActions: PathwayActions;
    isModalShown: boolean;
    handleClose: Function;
    oldName: string;
}
export default class ChangeNameModal extends React.Component<IChangeNameModalProps, {}> {
    newName: string;
    constructor(props: IChangeNameModalProps);
    entrezGene(): void;
    render(): JSX.Element;
    handleChange(e: any): void;
}
export {};
