import React from 'react';
import Nav from '../Nav';
import RideCard from '../RideCard';
import ProRider from '../ProRider';
import {Row, Col, Container, Button} from 'reactstrap';
import GatorLogo from '../Landing/GatorLogo.png'
import './Profile.css'
import profPic from './gw.jpg';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rides:[
                {
                    location: "Trader Joes",
                    day_month: "2020-04-22",
                    when: "10:30",
                    drop: "11:45",
                    driver: "Johny Appleseed",
                    others: "George Washington, Tom Brady",
                    id: '1'
                }
            ],
            currentRide:{}
        }
    }

    render(){
        let customCards = this.state.rides.map(newCard => {
            return (
                <Col sm="4">
                    <ProRider newCard={newCard} />
                </Col>
            )
        })
        return(
            <div>
                <Nav />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col></Col>
                        <Col md="auto">
                            <img className="proimg" src={profPic} />  
                        </Col>
                        <Col align='right'>
                          <ProfileEdit/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-md-center">
                            <h2 className="center">George Washington</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="driver">Driver</h2>
                            <h2 className="rider">Rider</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-md-center">
                            <h5 className="center">Hey, I am a political science major. I'm in ROTC and hope to be in special forces in the future. </h5>
                        </Col>
                    </Row>
                </Container>
                <h4>Upcoming Rides: </h4>
                <Row>
                    {customCards}
                </Row>
            </div>
        )
    }
}
export default Profile;