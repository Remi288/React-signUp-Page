import React from 'react'
import styled from "styled-components";
import logo from "../assets/logoo.png"
import Input from './Input';

const Sidebar = () => {
    return (
      <Container>
        <LogoWrapper>
          <img src={logo} alt="" />
          <h3>
            Rem <span>Codes</span>
          </h3>
        </LogoWrapper>
        <Form>
          <h3>Sign Up</h3>
          <Input placeholder="full name" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="confirm password" />
          <Button>Sign Up</Button>
        </Form>
        <div>
          <Terms>
            By signing up, I agree to the Privacy Policy <br /> and Terms of
            Service
          </Terms>
          <h4>
            Already have an account? <span>Sign In</span>
          </h4>
        </div>
      </Container>
    );
}

const Terms = styled.p`
    padding: 0 1rem;
    color: #808080;
    text-align: center;
    font-size: 10px;
    font-weight: 300;
`;

const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }
`;

const Button = styled.button`
  width: 75%;
  border: none;
  margin: 0.5rem 0;
  height: 40px;
  min-width: 250px;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: 6px 14px 9px -15px rgba(0, 0, 0, 0.25);
  background-color: #bedcfa;
  color: #fff;
  font-weight:600;
  cursor: pointer;
`;
const LogoWrapper = styled.div`
  img {
    width: 25%;
    margin-left: 150px;
  }
  h3 {
    text-align: center;
    font-size: 22px;
    color: #9d0191;
  }

  span {
    font-weight: 300;
    color: #ee9595;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgb(255, 255, 255, 0.7);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
  }

  span {
    color: #ee9595;
    cursor: pointer;
  }
`;


export default Sidebar
