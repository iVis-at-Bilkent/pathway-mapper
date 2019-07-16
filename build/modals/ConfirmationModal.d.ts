import React from 'react';
import { EModalType } from '../react-pathway-mapper';
interface IConfirmationModalProps {
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
}
export default class ConfirmationModal extends React.Component<IConfirmationModalProps> {
    static pendingFunction: Function;
    constructor(props: IConfirmationModalProps);
    render(): JSX.Element;
}
export {};
