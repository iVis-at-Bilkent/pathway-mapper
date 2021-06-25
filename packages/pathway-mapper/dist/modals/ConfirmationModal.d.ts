import React from 'react';
import { EModalType } from '../ui/react-pathway-mapper';
interface IConfirmationModalProps {
    show: boolean;
    handleClose: (modalId: EModalType) => void;
}
export default class ConfirmationModal extends React.Component<IConfirmationModalProps> {
    static pendingFunction: Function;
    constructor(props: IConfirmationModalProps);
    render(): JSX.Element;
}
export {};
