import React from "react";
import PathwayActions from "../PathwayActions";
import { EModalType } from "../react-pathway-mapper";
interface IButtonbarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modelId: EModalType) => void;
}
export default class Buttonbar extends React.Component<IButtonbarProps, {}> {
    private searchedGene;
    constructor(props: IButtonbarProps);
    render(): JSX.Element;
}
export {};
