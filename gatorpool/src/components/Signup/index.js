import React from "react";
import {Row, Col, Container, Button, Input, Label, Form} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import "./Signup.css";


class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            firstBox : false,
            secondBox: false
          }
    }

    handleCheck(event){
        const target = event.target;
        if(target.name == "first"){
            this.setState({
                ["firstBox"] : true,
                ["secondBox"] : false
            });
        }
        else{
            this.setState({
                ["firstBox"] : false,
                ["secondBox"] : true
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submit")
        this.props.history.push('rideList')
      }

    render(){
        return(
            <div>
                <h2 className="welcomeText">Welcome to GatorPool! Let's get you places!</h2>
                <h2 className="welcomeText1">Please fill in the information below</h2>
                <Container>
                    <Form onSubmit = {this.handleSubmit.bind(this)}>
                    <Row className="inputRow" >
                        <Col sm="3">
                            <input type="text" class="form-control" placeholder="First Name"/>
                        </Col>
                        <Col sm = "3">
                            <input type="text" class="form-control" placeholder="Last Name"/>
                        </Col>
                    </Row>
                    <Row className="inputRow">
                        <Col sm="3">
                            <input type="email" class="form-control" placeholder="Email"/>
                        </Col>
                        <Col sm = "3">
                            <input type="password" class="form-control" placeholder="Password"/>
                        </Col>
                    </Row>
                    <Row className="inputRow">
                        <Col sm="2">
                            <Label><strong className = "gatorID">Gator1 ID:</strong></Label>
                           
                        </Col>
                        <Col sm = "3">
                        <Input type="text" class="form-control" placeholder="####-####"/>
                        </Col>
                    </Row>
                    <div>
                        <h1>Create a Bio</h1>
                        <p>Let other GatorPool-ers get to know you! We suggest including your major, clubs
                        or involvement and what you like to do in your free time!</p>
                    </div>
                    <Row sm = "1">
                         <Input type = "textarea" style={{ height: 150 }} />
                    </Row>
                    <Row className = "inputRow">
                    <Col xs={6}>
                        <p className = "drive">  Would you like to sign up to be a GatorPool driver?</p>
                        </Col>
                        <Col className = "drive" xs={1}>
                        <Input type="checkbox" checked = {this.state.firstBox} name = "first" onChange={this.handleCheck.bind(this)} ></Input>
                        <Label>Yes</Label>
                        </Col>
                        <Col className = "driveNo">
                        <Input type="checkbox" checked = {this.state.secondBox} name = "second" onChange={this.handleCheck.bind(this)}></Input>
                        <Label>No</Label>
                        </Col>
                        <Col className = "driveNo">
                        <Button block size="large" block style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50'}} type="submit" >
                        Submit
                    </Button>
                        </Col>
                    </Row>
                    </Form>
                </Container>
          </div>
        );
    }
}

export default withRouter(Signup);
