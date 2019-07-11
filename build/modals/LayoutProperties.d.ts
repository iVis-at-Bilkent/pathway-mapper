import React from 'react';
import { EModalType } from '../react-pathway-mapper';
interface ILayoutPropertiesProps {
    isModalShown: boolean;
    handleClose: (modelId: EModalType) => void;
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
}
export default class LayoutProperties extends React.Component<ILayoutPropertiesProps> {
    layoutProperties: ILayoutProperties;
    constructor(props: ILayoutPropertiesProps);
    render(): JSX.Element;
}
export {};
