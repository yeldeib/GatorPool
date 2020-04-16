import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col , Row} from "react-bootstrap";
import "./RidePost.css";

export default function RidePost() {
    const [dest, setDest] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [hour, setHour] = useState("");
    const [min, setMin] = useState("");

    function validateForm() {
        return dest.length > 0 && month.length > 0 && day.length
        && year.length > 0 && hour.length > 0 && min.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <div className="RidePost">
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <ControlLabel>Destination</ControlLabel>
                    </Col>
                    <Col>
                        <FormControl
                                autoFocus
                                type="destination"
                                placeholder="Destination"
                                value={dest}
                                onChange={e => setDest(e.target.value)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ControlLabel>Date</ControlLabel>
                    </Col>
                    <Col>
                        <FormControl
                            autoFocus
                            type="m"
                            placeholder="mm"
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <FormControl
                            autoFocus
                            type="d"
                            placeholder="dd"
                            value={day}
                            onChange={e => setDay(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <FormControl
                            autoFocus
                            type="y"
                            placeholder="yyyy"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <ControlLabel>Time</ControlLabel>
                    </Col>
                    <Col>
                        <FormControl
                            autoFocus
                            type="hour"
                            placeholder="Hour"
                            value={hour}
                            onChange={e => setHour(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <FormControl
                            autoFocus
                            type="min"
                            placeholder="Min"
                            value={min}
                            onChange={e => setMin(e.target.value)}
                        />
                    </Col>
                </Row>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Post Ride
            </Button>
            </form>
        </div>
    );
}