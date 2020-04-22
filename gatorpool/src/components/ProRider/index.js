import React from 'react';
import {Card, CardText, CardBody, CardTitle, Button, CardGroup, CardHeader} from 'reactstrap';

class ProRider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <CardGroup className = "card">
                    <CardHeader style={{ backgroundColor: '#dce7f7'}}>{this.props.newCard.location}</CardHeader>
                    <Card body inverse style={{ backgroundColor: '#92b2d4', borderColor: '#92b2d4' }}>
                        <CardTitle>Driver: {this.props.newCard.driver}</CardTitle>
                        <CardText>Day: {this.props.newCard.day_month}
                            <br></br>When: {this.props.newCard.when}-{this.props.newCard.drop}
                            <br></br>Other Riders: {this.props.newCard.others}</CardText>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default ProRider;