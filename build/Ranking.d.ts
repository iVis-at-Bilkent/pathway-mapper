import React from 'react';
import PathwayActions from './PathwayActions.js';
interface IRankingProps {
    pathwayActions: PathwayActions;
    bestPathwaysAlgos: any[][];
}
export default class Ranking extends React.Component<IRankingProps, {}> {
    bestPathways: any[];
    dropDownTitle: string;
    isPercentageMatch: number;
    isAlterationEnabled: number;
    constructor(props: IRankingProps);
    setBestPathwayMethod(i: number): void;
    onPathwayClick(pathway: string): void;
    onApplyClick(): void;
    render(): JSX.Element;
}
export {};
