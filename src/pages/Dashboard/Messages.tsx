import React from 'react'
import styled from "styled-components"

const Messages = () => {
  return (
    <Container>
      <Wrapper>
        <Box>

        </Box>
      </Wrapper>
    </Container>
  )
}

export default Messages
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 20px;
  background-color: #797979;
`

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  height: 20px;
  background-color: #fff;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`