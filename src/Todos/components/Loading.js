import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';

const Loading = () => {
    return (
        <Col>
            <Spinner style={{
                width: 100,
                height: 100
            }}/>
        </Col>
    )
}

export default Loading