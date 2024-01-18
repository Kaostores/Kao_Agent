import React from 'react'
import img from "../../assets/Design stats-amico.png"
import styled from "styled-components"

const Login = () => {
  return (
    <Container>
        <Left>
            <img src={img} alt="" />
            <Card></Card>
        </Left>
    </Container>
  )
}

export default Login
const Card = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #0031ade4;
`
const Left = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: red; */
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`