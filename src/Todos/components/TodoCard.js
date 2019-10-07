import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TodoCard = ({todoInfo, toggleTaskState}) => {
    return(
        <Card style={{ width: '14rem', margin: '10px'}}>
            <Card.Img variant="top" src={todoInfo.imgUrl} />
            <Card.Body>
            <Card.Title>{`Task ID: ${todoInfo.id}`}</Card.Title>
            <Card.Text  className="font-weight-light">{todoInfo.description}</Card.Text>
            <Card.Text>{`Task state: ${{false: 'Incomplete', true: 'Complete'}[todoInfo.state]}`}</Card.Text>
            <Button variant="primary" onClick={() => toggleTaskState(todoInfo._id)}>Toggle task state</Button>
            </Card.Body>
        </Card>
    )
    
}

export default TodoCard