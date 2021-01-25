import React from 'react';
interface IWelcomePageProps {
    postWelcome: Function;
}
export default class WelcomePage extends React.Component<IWelcomePageProps, {}> {
    private continueButtonVisibility;
    private activeType;
    constructor(props: IWelcomePageProps);
    handleTypeClick(type: number): void;
    render(): JSX.Element;
}
export {};
