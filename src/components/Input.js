import React from 'react'
import styled from "styled-components";

const Input = ({type, placeholder}) => {
    return (
        <Container>
            <StyledInput type="text" />
            <div />
        </Container>
    )
}

const StyledInput = styled.input`
    width: 80%;
    min-width: 250px;
    max-width: 350px;
    height: 40px;
    margin: 0.5rem 0;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 

`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export default Input
