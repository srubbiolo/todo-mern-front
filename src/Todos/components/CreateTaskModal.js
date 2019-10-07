import React ,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTaskModal = ({isOpen, addTask, closeModal}) => {
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        toast.error('Please, complete all the fields.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
            draggable: false
        });
      } else {
        event.preventDefault();
        event.stopPropagation();
        addTask(id, description, isCompleted, image);
        closeModal(false);
        setValidated(false);
      }
      setValidated(true);
      
    };

    return(
        <Modal 
            show={isOpen}
            onHide={() => closeModal(false)} >
            <Modal.Header closeButton>
            <Modal.Title>Add a task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="8">
                        <Form.Label>Id of the task:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name=""
                            onChange={(e) => {setId(e.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                        <Form.Group as={Col} md="8">
                        <Form.Label>Description of the task: </Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows="3"
                            onChange={(e) => {setDescription(e.target.value)}}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Check if task is completed</Form.Label>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            checked={isCompleted}
                            label="(Color means the task is complete)"
                            onChange={() => {setIsCompleted(!isCompleted)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                        <Form.Group as={Col} md="8">
                        <Form.Label>Picture to remember the task:</Form.Label>
                        <Form.Control
                            required
                            type="file" accept="image/*" name="photo"
                            onChange={(e) => {setImage(e.target.files[0])}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Load task</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CreateTaskModal