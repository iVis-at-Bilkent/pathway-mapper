import React from "react";
import { EModalType, IColorValueMap } from "../ui/react-pathway-mapper";
interface IValueColorObj {
    value: string;
    color: string;
}
interface IProfilesColorSchemeModalProps {
    show: boolean;
    handleClose: (modalId: EModalType) => void;
    colorValueMapping: IColorValueMap;
    handleColorMappingChange: (colorMapping: IColorValueMap) => void;
}
export default class ProfilesColorSchemeModal extends React.Component<IProfilesColorSchemeModalProps, {}> {
    colorMappings: IValueColorObj[];
    showUniqueValuesWarningModal: boolean;
    constructor(props: IProfilesColorSchemeModalProps);
    componentDidUpdate(prevProps: any): void;
    initColorMappings(): void;
    handleColorChange(index: number, color: string): void;
    handleValueChange(index: number, value: string): void;
    addDefaultColorMapping(): void;
    removeColorMapping(index: number): void;
    setDefaultColorMapping(): void;
    setShowUniqueValuesWarningModal(val: boolean): void;
    handleSaveColorScheme(): boolean;
    close(): void;
    render(): JSX.Element;
}
export {};
