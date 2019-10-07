import React, { useEffect, useState } from 'react';
import Header from './Header';
import TodosList from './TodosList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CreateTaskModal from './CreateTaskModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
const TodoLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const fetchAllTasks = () => {
        axios.get(`http://localhost:8081/v1/todos`).then( res => {
            setTodos(res.data.todos);
            setIsLoading(false);
        })
        .catch(e => {
            console.error(e);
        }) 
    }

    const updateState = (id) => {
        axios.put(`http://localhost:8081/v1/todos`, {
            dbId: id
        }).then( res => {
            toast.success("Status updated!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                draggable: false
            });
        })
        .catch(e => {
            toast.error(e, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 4000,
                draggable: false
            });
        }) 
    }

    const addTask = (id, desc, st, img) => {
        let bodyFormData = new FormData();
        bodyFormData.set('id', id);
        bodyFormData.append('description', desc); 
        bodyFormData.append('state', st); 
        bodyFormData.append('image', img); 
        axios({
            method: 'post',
            url: `http://localhost:8081/v1/todos`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function () {
                fetchAllTasks();
                toast.success("Task added!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    draggable: false
                });
            })
            .catch(function (error) {
                toast.error(error.response.data, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    draggable: false
                });
            });
    }

    const buttonPressed = (value) => {
        setOpenModal(value);
    } 

    const closeModal = (value) => {
        setOpenModal(value);
    } 

    useEffect(() => {
        fetchAllTasks();
    }, [])

    return (
        <Container>
            <ToastContainer />
            <Row>
                <Header title={'To do list'} buttonPressed={buttonPressed} buttonText="Add a task"></Header>
            </Row>
            <Row>
                <TodosList
                    isLoading={isLoading}
                    todos={todos}
                    updateState={updateState}>
                </TodosList>
            </Row>
            <CreateTaskModal
                isOpen={openModal}
                addTask={addTask}
                closeModal={closeModal}>
            </CreateTaskModal>
            
        </Container>
    )
}

export default TodoLayout