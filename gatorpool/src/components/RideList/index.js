import React from 'react'; 
import "./RideList.css";
import RideCard from '../RideCard';
import Nav from '../Nav';
import {Button, Input, CustomInput, Row, Col, Form, FormGroup, Label} from 'reactstrap';

class RideList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rides:[
                {
                    location: "Trader Joes",
                    day_month: "2020-02-15",
                    when: "10:30",
                    drop: "11:45",
                    driver: "Johny Appleseed",
                    others: "Tom Brady"
                },
                {
                    location: "Sams Club",
                    day_month: "2020-04-20",
                    when: "8:00",
                    drop: "9:50",
                    driver: "Jack Johnson",
                    others: "No one else"
                },
                {
                    location: "SouthWest",
                    day_month: "2020-10-15",
                    when: "13:00",
                    drop: "15:50",
                    driver: "Swole Joel",
                    others: "Ripped Tony"
                }
            ],
            currentRide:{}
        }
    }

    handleInput(e){
        let currentRide = this.state.currentRide;
        let name = e.target.name;
        let value = e.target.value;

        currentRide[name] = value;

        this.setState({currentRide})
    }

    addItem(e){
        e.preventDefault();
        const newRide = this.state.currentRide;
        console.log(newRide);
        
        let rides = this.state.rides;
        console.log(rides);

        rides.push(newRide);
        this.setState({rides})
        console.log(rides);
    }

    render(){
        let customCards = this.state.rides.map(newCard => {
            return (
                <Col sm="4">
                    <RideCard newCard={newCard} />
                </Col>
            )
        })
        return(
            <div>
                <Nav />
                <div>
                    <h2 className="centering">Create a New Ride:</h2>
                </div>
                <Form onSubmit={this.addItem.bind(this)}>
                    <FormGroup>
                        <Row>
                            <Col sm="2">
                                <Label>Location:</Label>
                            </Col>
                            <Col sm="4">
                                <Input type="text" name="location" placeholder="location" value={this.state.currentRide["location"] || ''} onChange={this.handleInput.bind(this)}/>
                            </Col>
                            <Col sm="2">
                                <Label>Date:</Label>
                            </Col>
                            <Col sm="4">
                                <Input type="date" name="day_month" placeholder="date placeholder" value={this.state.currentRide["day_month"] || ''} onChange={this.handleInput.bind(this)}/>
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
                                <CustomInput type="time" name="when" placeholder="time placeholder" value={this.state.currentRide["when"] || ''} onChange={this.handleInput.bind(this)} inline />
                            </Col>
                            <Col sm="2">
                                <Label> Dropoff:</Label>
                            </Col>
                            <Col sm="3">
                                <CustomInput type="time" name="drop" placeholder="time placeholder" value={this.state.currentRide["drop"] || ''} onChange={this.handleInput.bind(this)} inline />
                            </Col>    
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col sm="2">
                                <Label>Driver: </Label>
                            </Col>
                            <Col sm="4">
                                <Input type="text" name="driver" placeholder="driver" value={this.state.currentRide["driver"] || ''} onChange={this.handleInput.bind(this)}/>
                            </Col>
                            <Col sm="2">
                                <Label>Other Passengers: </Label>
                            </Col>
                            <Col sm="4">
                                <Input type="text" name="others" placeholder="others" value={this.state.currentRide["others"] || ''} onChange={this.handleInput.bind(this)}/>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Button type="submit"> Submit </Button>
                </Form>
                <div>
                    <h2 className="centering">Available Rides: </h2>
                </div>    
                <Row>
                    {customCards}
                </Row>
            </div>
        );
    }
}

export default RideList;