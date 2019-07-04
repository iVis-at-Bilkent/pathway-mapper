import React from "react";
import PathwayActions from "../PathwayActions";
interface IButtonbarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modelId: number) => void;
}
export default class Buttonbar extends React.Component<IButtonbarProps, {}> {
    private searchedGene;
    constructor(props: IButtonbarProps);
    render(): JSX.Element;
}
export {};
