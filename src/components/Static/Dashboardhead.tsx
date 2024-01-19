import React from 'react'
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";

const Dashboardhead = () => {
  return (
    <Container>
      <Wrapper>
        <Inputhold>
          <Icon><IoSearch /></Icon>
          <input type="text" placeholder='Search'/>
        </Inputhold>
      </Wrapper>
    </Container>
  )
}

export default Dashboardhead
const Icon = styled.div`
  color: #0030AD;
  font-size: 20px;
`
const Inputhold = styled.div`
  width: 250px;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #DEE3E9;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  overflow: hidden;
  input{
    flex: 1;
    margin-left: 10px;
    outline: none;
    height: 100%;
  }
`
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`