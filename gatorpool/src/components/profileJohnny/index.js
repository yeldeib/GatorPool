import React from 'react';
import Nav from '../Nav';
import RideCard from '../RideCard';
import ProRider from '../ProRider';
import {Row, Col, Container, Card, CardTitle, CardText, Button} from 'reactstrap';
import GatorLogo from '../Landing/GatorLogo.png'
import '../Profile/Profile.css';
import profPic from './ja.jpg';
import Review from "./review";

class ProfileJohnny extends React.Component{
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
            currentRide:{},
            modal: false
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
                        <Col md="auto">
                            <img className="proimg" src={profPic} />  
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-md-center">
                            <h2 className="center">Johhny Appleseed</h2>
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
                            <h5 className="center">Hey, I am a nutritional sciences major. I love the outdoors and often go to the Hail farmers market to get fresh produce on Saturdays</h5>
                        </Col>
                    </Row>
                </Container>
                <h4>Upcoming Rides: </h4>
                <Row>
                    {customCards}
                </Row>
                <Row>
                    <Col>
                    <h2 style={{padding: 10}}>Reviews</h2>
                    </Col>
                    <Col align = 'right'>
                    <Review />
                    </Col>
                    </Row>
                <Container>
                <Row>
        <Card body style={{ backgroundColor: '#dce7f7'}}>
          <CardTitle><h4>George Washington</h4></CardTitle>
          <CardText>Great Guy! Super nice and respectful rider!</CardText>
        </Card>
        </Row>
        </Container>
        </div>
           
        )
    }
}
export default ProfileJohnny;