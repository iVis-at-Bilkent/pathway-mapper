import React from 'react';
import { EModalType } from '../ui/react-pathway-mapper';
interface ICBioHelpModalProps {
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
    patientView?: boolean;
}
export default class CBioHelpModal extends React.Component<ICBioHelpModalProps> {
    constructor(props: ICBioHelpModalProps);
    generateOncoprintLegend(): SVGSVGElement;
    render(): JSX.Element;
}
export {};
