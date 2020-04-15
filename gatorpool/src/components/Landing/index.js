import React from 'react';
import GatorLogo from './GatorLogo.png'
import {Row, Col, Container, Button} from 'reactstrap';
import { withRouter } from "react-router-dom";
import './Landing.css';

function Landing(props) {
    return(
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <img className="my_image" src={GatorLogo} />  
                    </Col>
                </Row>
            </Container>
            <div className="loginButton">
                <Button size="lg" block style={{ backgroundColor: '#92b2d4', borderColor: '#92b2d4'}} onClick ={() => {
                    props.history.push("/login");
                }}> Login </Button>
            </div>
            <br></br>
            <div className="loginButton">
                <Button size="lg" block style={{ backgroundColor: '#92b2d4', borderColor: '#92b2d4'}}>Sign Up</Button>
            </div>
        </div>
    );
}

export default withRouter(Landing);