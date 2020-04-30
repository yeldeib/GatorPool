import React, {useState} from 'react';
import "./RideCard.css";
import {Card, CardText, CardBody, CardTitle, Button, CardGroup, CardHeader, Fade} from 'reactstrap';
import Popup from "reactjs-popup";  
import {Row, Col, Container} from 'reactstrap';
import profPic from './ja.jpg';
import limoPic from './limo.jpg'



const RideCard = (props) => {
    const [fadeIn, setFadeIn] = useState(true);
    const [showPopup, setPopup] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);
    const linkName = '/profile' + props.newCard.id;
    function handleClick(){
        setFadeIn(!fadeIn);
        setPopup(true);
        console.log("Clicked")
    }

    function togglePopup() {  
        setPopup(false)
         }  
    //console.log(linkName);

    return(
        <div>
            <CardGroup className = "card">
                <CardHeader style={{ backgroundColor: '#dce7f7'}}>{props.newCard.location}</CardHeader>
                <Card body inverse style={{ backgroundColor: '#92b2d4', borderColor: '#92b2d4' }}>
                    <CardTitle>Driver: <a href={linkName}>{props.newCard.driver}</a></CardTitle>
                    <CardText>Day: {props.newCard.day_month}
                        <br></br>When: {props.newCard.when}-{props.newCard.drop}
                        <br></br>Other Riders: {props.newCard.others}</CardText>
                   
                    <Fade in={fadeIn} >

                        <Button onClick={handleClick} style={{ backgroundColor: '#eb8e1c', borderColor: '#eb8e1c'}}>Join Ride</Button>
                    </Fade>
                </Card>
            </CardGroup>
<Popup open = {showPopup}  position="right center">
<Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <img className="proimg" src={profPic} />  
                        </Col>
                        <Col md="auto">
                        <img className="proimg" src={limoPic} />  
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
                    <Row >
                        <Col>
                        <h5>Phone number: 123-456-7890</h5>
                        </Col>
                        <Col>
                        <h5>License plate: SCI3NC3</h5>
                        </Col>
                    </Row>
                </Container>
  </Popup>
        </div>
    )
    
}

export default RideCard;