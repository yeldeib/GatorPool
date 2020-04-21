import React from 'react';
import Nav from '../Nav';
import RideCard from '../RideCard';
import {Row, Col, Container} from 'reactstrap';
import GatorLogo from '../Landing/GatorLogo.png'
import './Profile.css'

class Profile extends React.Component{
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
                }
            ],
            currentRide:{}
        }
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
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <img className="proimg" src={GatorLogo} />  
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-md-center">
                            <h2 className="center">Jack Johnson</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="driver">Driver</h2>
                            <h2 className="driver">Rider</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-md-center">
                            <h5 className="center">Hey, I am a music major. I sing and play guitar and I'm from hawaii</h5>
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