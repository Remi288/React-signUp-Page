import React from 'react'
import styled from "styled-components";
import logo from "../assets/logoo.png"
import Input from './Input';

const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="" />
                <h3>Rem <span>Codes</span></h3>
            </LogoWrapper>
            <Form>
                <h3>Sign Up</h3>
                <Input placeholder="full name" />
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="password" />
                <Input type="password" placeholder="confirm password" />
            </Form>
        
        </Container>
    )
}


const Form = styled.div`
    width: 100%;
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }
`;
const LogoWrapper = styled.div`
    img{
        width: 25%;
        margin-left: 150px;
    
    
    }
    h3 {
        text-align: center;
        font-size: 22px;
        color: purple;
    }

    span {
        font-weight: 300;
        color: blue;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgb(255,255,255, 0.7);
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;




`;
export default Sidebar
