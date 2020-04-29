import React, {useState} from 'react';
import {Form, Modal, Button, ModalBody, ModalHeader, FormGroup, Input, Label, Row} from 'reactstrap';

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
                            <Label for='name'>name</Label>
                            <Input name='name' id='name'></Input>
                        </FormGroup>
                        <Row sm="1">
                            <Label>Bio</Label>
                            <Input type="textarea" style={{ height: 150 }} />
                        </Row>


                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};
export default ProfileEdit;