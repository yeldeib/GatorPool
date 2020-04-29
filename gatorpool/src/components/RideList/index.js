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
                    day_month: "2020-04-29",
                    when: "10:30",
                    drop: "11:45",
                    driver: "Johny Appleseed",
                    others: "George Washington, Tom Brady",
                    id: '1'
                },
                {
                    location: "Sams Club",
                    day_month: "2020-04-29",
                    when: "8:00",
                    drop: "9:50",
                    driver: "Jack Johnson",
                    others: "No one else",
                    id: '2'
                },
                {
                    location: "SouthWest",
                    day_month: "2020-04-30",
                    when: "13:00",
                    drop: "15:50",
                    driver: "Swole Joel",
                    others: "Ripped Tony",
                    id: '3'
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

        const rides = this.state.rides.concat(this.state.currentRide);

        this.setState({rides})
        console.log(rides);
        this.state.currentRide = {}
    }

    render(){
        let customCards = this.state.rides.map(newCard => {
            return (
                <Col sm="4">
                    <RideCard newCard={newCard}/>
                </Col>
            )
        })
        return(
            <div>
                <Nav />

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