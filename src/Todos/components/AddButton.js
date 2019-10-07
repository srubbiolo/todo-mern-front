import React from 'react';
import Button from 'react-bootstrap/Button';

const AddButton = ({ buttonText, buttonPressed }) => {

    return (
            <Button style={{margin: '10px'}} onClick={() => buttonPressed(true)} color="primary">{buttonText}</Button>
    )
}

export default AddButton