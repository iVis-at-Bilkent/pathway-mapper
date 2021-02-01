import React from "react";
import { EGridType } from "../modals/GridSettings";
import PathwayActions from "../utils/PathwayActions";
import { EModalType } from "./react-pathway-mapper";
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
