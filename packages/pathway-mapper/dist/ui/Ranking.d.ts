import React from 'react';
import PathwayActions from '../utils/PathwayActions.js';
import { IPathwayMapperTable } from "./react-pathway-mapper";
interface IRankingProps {
    pathwayActions: PathwayActions;
    bestPathwaysAlgos: any[][];
    tableComponent: (data: IPathwayMapperTable[], selectedPathway: string, onPathwaySelect: (pathway: string) => void) => JSX.Element;
    patientView?: boolean;
}
export default class Ranking extends React.Component<IRankingProps, {}> {
    bestPathways: any[];
    shownPathways: any[];
    dropDownTitle: string;
    selectedPathway: string;
    isPercentageMatch: number;
    isAlterationEnabled: number;
    considerOnlyTCGAPanPathways: boolean;
    isExpanded: boolean;
    readonly COUNT_PERC_EXPLANATION = "Whether we should favor the number of genes of interest matching the ones in a pathway or the percentage of such genes in that pathway. For instance, suppose genes of interest are A, B, and C, and the pathway contains genes B, C, D, and E. When we consider count, the score is 2 (for the two genes that match). However, when we consider percentage the score will be 50% as 2 of the 4 genes in the pathway are among genes of interest.";
    readonly ALTERATION_EXPLANATION = "When this is checked, each matching gene will not directly contribute to the score as 1 unit but with the alteration frequency percentage of that gene. For instance, suppose genes of interest are A, B, and C with alteration frequencies of 0.5, 0.2, and 0.3, respectively, and the pathway contains genes B, C, D, and E. When this is option isn't checked, the score will be 2 for match count and 50% for the match percentage. However, when this option is checked, the scores will be 0.2+0.3=0.5 and (0.2+0.3)/4=12.5% for match count and percentage, respectively.";
    readonly TCGA_PANCAN_EXPLANATION = "The pathways listed above were retrieved from <a href='http://www.pathwaymapper.org' target='_blank'>PathwayMapper</a>. When this option is checked, only the pathways under TCGA > PanCanAtlas will be shown. Uncheck to show all.";
    constructor(props: IRankingProps);
    setBestPathwayMethod(i: number): void;
    onPathwayClick(pathway: string): void;
    onApplyClick(): void;
    filterBestPathwaysByTCGAPanPathways(): void;
    toggleConsiderOnlyTCGAPanPathways(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
