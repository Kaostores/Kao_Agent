import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from "react-icons/bs";

const Tableholds = () => {
  return (
    <Container>
        <First>
          <Paymentholder>
            <h3>Payment Method</h3>
            <Icon><BsThreeDotsVertical /></Icon>
          </Paymentholder>
        </First>
    </Container>
  )
}

export default Tableholds
const Icon = styled.div`
  cursor: pointer;
`
const Paymentholder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-size: 17px;
    color: #000;
  }
`
const First = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  padding: 13px 13px;
  background-color: #fff;
  border-radius: 5px;
`
const Container = styled.div`
    display: flex;
    height: 150px;
    background-color: red;
    margin-top: 20px;
`