import React from 'react';
import {Card, CardText, CardBody, CardTitle, Button, CardGroup, CardHeader} from 'reactstrap';

const ProRider = (props) => {
    
    const linkName = '/profile' + props.newCard.id;

    
        return(
            <div>
                <CardGroup className = "card">
                    <CardHeader style={{ backgroundColor: '#dce7f7'}}>{props.newCard.location}</CardHeader>
                    <Card body inverse style={{ backgroundColor: '#92b2d4', borderColor: '#92b2d4' }}>
                        <CardTitle>Driver: <a href={linkName}>{props.newCard.driver}</a></CardTitle>
                        <CardText>Day: {props.newCard.day_month}
                            <br></br>When: {props.newCard.when}-{props.newCard.drop}
                            <br></br>Other Riders: {props.newCard.others}</CardText>
                    </Card>
                </CardGroup>
            </div>
        )
    
}

export default ProRider;