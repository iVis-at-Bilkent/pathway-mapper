import { VisibilityProperty } from 'csstype';
import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

interface LoginPageProps{
    postWelcome: Function;
    userName: string;
}


@observer
export default class LoginPage extends React.Component<LoginPageProps, {}>{


    username :string = "";

    constructor(props: LoginPageProps){
        super(props);
        makeObservable(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.username = this.props.userName;
    }
    handleSubmit(event){
         this.props.postWelcome( true , this.username );
    }

    handleChange(event){
        this.username = event.target.value === "" ? this.props.userName : event.target.value;
    }

    render(){

        return (
        <div className="pathwayMapper ">
            <div className="welcomePageContainer centerText">
                <div className="landingContent">
                    <Grid>
                        <Row>
                            <h1>Welcome to PathwayMapper</h1>
                            <h3>Please enter your username :</h3>
                        </Row>
                        <Row >
                            <form onSubmit={this.handleSubmit}>   
                             <label>
                                 Name:
                                 <input type="text" style = {{marginLeft: "5px"}} placeholder = {(this.username !== undefined && this.username !== null) ? this.username : "Username" } onChange={this.handleChange} />       
                             </label>
                             <input style = {{marginLeft: "5px"}} type="submit" value="Continue" />
                             </form>
                        </Row>

                    </Grid>
                </div>
                <ReactTooltip className="pmTip" />
            </div>
        </div>
        );
    }


}