import React from 'react';
import Col from 'react-bootstrap/Col';
import AddButton from './AddButton';

const Header = ({title, buttonPressed, buttonText}) => {
    return (
        <>
            <Col xs="9"><h1>{title}</h1></Col>
            <Col xs="3"><AddButton buttonText={buttonText} buttonPressed={buttonPressed}></AddButton></Col>
        </>
    )
}

export default Header