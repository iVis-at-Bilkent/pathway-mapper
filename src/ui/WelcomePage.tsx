import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'
import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import { VisibilityProperty } from 'csstype';

interface IWelcomePageProps{
    postWelcome: Function;
}


@observer
export default class WelcomePage extends React.Component<IWelcomePageProps, {}>{

    @observable
    private continueButtonVisibility: VisibilityProperty = 'hidden';

    @observable
    private activeType: number = -1;

    constructor(props: IWelcomePageProps){
        super(props);
        makeObservable(this);
    }

    @action.bound
    handleTypeClick(type: number){
        this.activeType = type;
        this.continueButtonVisibility = 'visible';
    }

    render(){

        return (
        <div className="pathwayMapper ">
            <div className="welcomePageContainer centerText">
                <div className="landingContent">
                    <Grid>
                        <Row>
                            <h1>Welcome to PathwayMapper</h1>
                            <div className="creditInformation">
                                <a href="https://academic.oup.com/bioinformatics/article/doi/10.1093/bioinformatics/btx149/3072875/PathwayMapper-a-collaborative-visual-web-editor" target="_blank"><h5>Please cite the following when using PathwayMapper: Bahceci et al. (2017) "PathwayMapper: a collaborative visual web editor for cancer pathways and genomic data", Bioinformatics.</h5></a>
                            </div>
                            <div className="contactInformation">
                                <a href="mailto:pathwaymapper@gmail.com?subject=PathwayMapper">pathwaymapper@gmail.com</a> <br/>
                                <a href="https://github.com/iVis-at-Bilkent/pathway-mapper" target="_blank">https://github.com/iVis-at-Bilkent/pathway-mapper</a>
                            </div>
                            <h3>Please choose the type of your usage:</h3>
                        </Row>
                        <Row className="welPageButtons">
                            <div id="localUsage" className={"welcomePageCheckable " + (this.activeType === 0 ? "active" : "")}  style={{marginRight: "5px"}}
                                    onClick={() => {this.handleTypeClick(0);}}
                                    data-tip="Create a pathway individually" data-place="left" data-iscapture="true" data-event='click' data-effect="solid"
                                    >
                            <i className="fa fa-check"></i>
                            Local
                            </div>
                            <div id="collaborativeUsage" className={"welcomePageCheckable " + (this.activeType === 1 ? "active" : "")} style={{marginRight: "5px"}}
                                    data-tip="Share the pathway ID with other(s) to collaboratively create a pathway" 
                                    data-place="right" data-iscapture="true" data-event='click' data-effect="solid"
                                    onClick={() => {this.handleTypeClick(1);}}>
                            <i className="fa fa-check"></i>
                            Collaborative
                            </div>
                            <div id="cBioPortalUsage" className="welcomePageCheckable" style={{display: "none"}} data-original-title="" title="">
                            <i className="fa fa-check"></i>
                            cBioPortal
                            </div>
                        </Row>

                        <Row className="continueRow" style={{visibility: this.continueButtonVisibility}}>
                            <Col md={12} className="centerText">
                            <div className="continueButton" onClick={() => {this.props.postWelcome(this.activeType === 1);}}>
                                Continue
                            </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <ReactTooltip className="pmTip" />
            </div>
        </div>
        );
    }


}