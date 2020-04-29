import React, {useState} from 'react';
import "./RideCard.css";
import {Card, CardText, CardBody, CardTitle, Button, CardGroup, CardHeader, Fade} from 'reactstrap';


const RideCard = (props) => {
    const [fadeIn, setFadeIn] = useState(true);

    const toggle = () => setFadeIn(!fadeIn);
    const linkName = '/profile' + props.newCard.id;
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
                        <Button onClick={toggle} style={{ backgroundColor: '#eb8e1c', borderColor: '#eb8e1c'}}>Join Ride</Button>
                    </Fade>
                </Card>
            </CardGroup>
        </div>
    )
    
}

export default RideCard;