import React from "react";
import PathwayActions from "../PathwayActions";
import { EModalType } from "../react-pathway-mapper";
import { EGridType } from "../modals/GridSettings";
interface IButtonbarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modelId: EModalType) => void;
}
export default class Buttonbar extends React.Component<IButtonbarProps, {}> {
    private searchedGene;
    constructor(props: IButtonbarProps);
    setEnabledType(newType: EGridType): void;
    render(): JSX.Element;
}
export {};
