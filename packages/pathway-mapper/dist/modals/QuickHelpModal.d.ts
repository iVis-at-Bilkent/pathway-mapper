import React from 'react';
import { EModalType } from '../ui/react-pathway-mapper';
interface IQuickHelpModalProps {
    show: boolean;
    handleClose: (modalId: EModalType) => void;
}
export default class QuickHelpModal extends React.Component<IQuickHelpModalProps> {
    constructor(props: IQuickHelpModalProps);
    render(): JSX.Element;
}
export {};
