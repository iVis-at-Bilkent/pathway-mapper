import React from "react";
import { EModalType } from "../ui/react-pathway-mapper";
import PathwayActions from "../utils/PathwayActions";
interface ILayoutPropertiesProps {
    show: boolean;
    handleClose: (modelId: EModalType) => void;
    pathwayActions: PathwayActions;
}
export interface ILayoutProperties {
    name: string;
    animationDuration: number;
    animationEasing: string;
    nodeRepulsion: number;
    idealEdgeLength: number;
    edgeElasticity: number;
    nestingFactor: number;
    gravity: number;
    numIter: number;
    gravityRangeCompound: number;
    gravityCompound: number;
    gravityRange: number;
    tilingPaddingVertical: number;
    tilingPaddingHorizontal: number;
    initialEnergyOnIncremental: number;
    tile: boolean;
    animate: boolean;
    randomize: boolean;
    nodeDimensionsIncludeLabels: boolean;
}
export default class LayoutProperties extends React.Component<ILayoutPropertiesProps> {
    static layoutProperties: ILayoutProperties;
    internalLayoutProperties: ILayoutProperties;
    constructor(props: ILayoutPropertiesProps);
    updateInternalLayoutProperty(property: string, val: boolean | number): void;
    render(): JSX.Element;
}
export {};
