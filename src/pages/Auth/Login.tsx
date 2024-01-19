import React from 'react'
import img from "../../assets/Design stats-amico.png"
import img2 from "../../assets/design.png"
import styled from "styled-components"

const Login = () => {
  return (
    <Container>
        <Left>
            <Imageholder>
                {/* <img src={img2} alt="img1" /> */}
            </Imageholder>
            <Card>
                <img src={img} alt="" />
            </Card>
        </Left>
    </Container>
  )
}

export default Login
const Imageholder = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
const Card = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #0031ade4;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 380px;
    }
`
const Left = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`