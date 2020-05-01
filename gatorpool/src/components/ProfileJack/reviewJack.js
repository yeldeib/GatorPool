import React, { useState } from 'react';
import { Form, Modal, Button, ModalBody, ModalHeader, FormGroup, Label, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';
import "../Profile/Profile.css";

const ReviewJack = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button align='right' color='success' onClick={toggle}>Write a review</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                   Write a Review
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for='first'>first name</Label>
                                    <Input name='first' id='first'></Input>
                                </Col>
                                <Col>
                                    <Label for='last'>last name</Label>
                                    <Input name='last' id='last'></Input>
                                </Col>
                            </Row>
                            <Row> <Col><FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              I want this review to be anonymous
            </Label>
          </FormGroup></Col></Row>
          <Row><Col>
          <Label for='review'>Review</Label>
                                    <Input type="textarea" name='review' id='review' style={{ height: 100 }} />
          </Col></Row>

                       </FormGroup>
                    </Form>
                    <Button align='right' color ='success'>submit</Button>
                </ModalBody>
            </Modal>
        </div>
    );
};
export default ReviewJack;