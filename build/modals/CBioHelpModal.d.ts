import React from 'react';
import { EModalType } from '../react-pathway-mapper';
interface ICBioHelpModalProps {
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
}
export default class CBioHelpModal extends React.Component<ICBioHelpModalProps> {
    constructor(props: ICBioHelpModalProps);
    render(): JSX.Element;
}
export {};
