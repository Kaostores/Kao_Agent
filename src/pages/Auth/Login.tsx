import React from 'react'
import img from "../../assets/Design stats-amico.png"
import img2 from "../../assets/design.png"
import img3 from "../../assets/KAO_Logo_PNG.png"
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
            <Circle>
                <img src={img3} alt="" />
            </Circle>
        </Left>
        
        <Right>
            
        </Right>
    </Container>
  )
}

export default Login
const Right = styled.div`
    width: 50%;
    height: 100%;
`
const Circle = styled.div`
    display: flex;
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: #0031ade4;
    top: 15px;
    border-radius: 100px;
    right: -33px;
    justify-content: center;
    align-items: center;
    img{
        width: 93%;
        height: 93%;
    }
`
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
    padding-top: 308px;
    padding-bottom: 309px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`