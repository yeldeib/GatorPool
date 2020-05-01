import React, { useState } from 'react';
import { Form, Modal, Button, ModalBody, ModalHeader, FormGroup, Label, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';
import "./Profile.css";

const ProfileEdit = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button align='center' color='info' onClick={toggle}>Edit Profile</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Update Your Profile
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
                            <Row>
                                <Col>
                                    <Label for='bio'>Bio</Label>
                                    <Input type="textarea" name='bio' id='bio' style={{ height: 100 }} />
                                </Col>
                            </Row>
                        </FormGroup>
                        
                        <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="instagram" />
      </InputGroup>
      <br />
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};
export default ProfileEdit;