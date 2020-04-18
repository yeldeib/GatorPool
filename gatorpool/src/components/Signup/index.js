import React from "react";
import {Row, Col, Container, Button} from 'reactstrap';
import "./Signup.css";

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
          }
    }

    render(){
        return(
            <div>
                <h2 className="welcomeText">Welcome to GatorPool! Let's get you places!</h2>
                <h2 className="welcomeText1">Please fill in the information below</h2>
                <Container>
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
                </Container>
          </div>
        );
    }
}

export default Signup;
