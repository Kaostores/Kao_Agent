import React from 'react'
import styled from "styled-components"

const Messages = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button>View More</button>
          </Buttonhold>
        </Box>
      </Wrapper>
    </Container>
  )
}

export default Messages
const Buttonhold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid #0030AD;
    color: #0030AD;
    border-radius: 5px;
  }
`
const Id3 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  h4{
    color: #797979;
    font-size: 15px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Id2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  h4{
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Id = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  h4{
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  background-color: #0031ad24;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  padding: 10px 10px;
`

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`