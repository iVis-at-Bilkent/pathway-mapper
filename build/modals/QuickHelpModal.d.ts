import React from 'react';
import { EModalType } from '../react-pathway-mapper';
interface IQuickHelpModalProps {
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
}
export default class QuickHelpModal extends React.Component<IQuickHelpModalProps> {
    constructor(props: IQuickHelpModalProps);
    render(): JSX.Element;
}
export {};
