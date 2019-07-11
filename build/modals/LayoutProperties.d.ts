import React from 'react';
import { EModalType } from '../react-pathway-mapper';
interface ILayoutPropertiesProps {
    isModalShown: boolean;
    handleClose: (modelId: EModalType) => void;
}
export default class LayoutProperties extends React.Component<ILayoutPropertiesProps> {
    constructor(props: ILayoutPropertiesProps);
    render(): JSX.Element;
}
export {};
