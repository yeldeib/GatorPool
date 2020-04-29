import React from 'react'; 
import "./CreateRide.css";
import Nav from '../Nav';
import {Button, Input, CustomInput, Row, Col, Form, FormGroup, Label} from 'reactstrap';

class CreateRide extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Nav />
                <div>
                    <h2 className="centering">Create a New Ride:</h2>
                </div>
                <Form>
                    <FormGroup>
                        <Row>
                            <Col sm="2">
                                <Label> Starting location:</Label>
                            </Col>
                            <Col sm="4">
                                <Input type="text" name="pickup" placeholder="pickup location"  />
                            </Col>

                            <Col sm="2">
                                <Label> Destination:</Label>
                            </Col>
                            <Col sm="4">
                                <Input type="text" name="destination" placeholder="destination"  />
                            </Col>
                            
                        </Row>
                    </FormGroup>
                    
                    <FormGroup>
                        <Row>
                            <Col sm="2">
                                <Label>Time: </Label>
                            </Col>
                            <Col sm="2">
                                <Label> Pickup:</Label>
                            </Col>
                            <Col sm="3">
                                <CustomInput type="time" name="when" placeholder="time placeholder" inline />
                            </Col>
                            <Col sm="2">
                                <Label> Dropoff:</Label>
                            </Col>
                            <Col sm="3">
                                <CustomInput type="time" name="drop" placeholder="time placeholder" inline />
                            </Col>    
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                        <Col sm="2">
                                <Label>Date:</Label>
                            </Col>
                            <Col sm="4">
                                <Input type="date" name="day_month" placeholder="date placeholder"/>
                            </Col>
                            <Col sm="2">
                                <Label>Other Passengers: </Label>
                            </Col>
                            <Col sm="4">
                                <Input type="text" name="others" placeholder="others"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        );
    }
}

export default CreateRide;