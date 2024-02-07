import React from 'react'
import styled from "styled-components"

const Messages = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Id></Id>
        </Box>
      </Wrapper>
    </Container>
  )
}

export default Messages
const Id = styled.div`
  display: flex;
  align-items: center;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 20px;
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