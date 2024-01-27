import React from 'react'
import styled from 'styled-components'

const Wallet = () => {
  return (
    <Container>
      <Wrapper>
        <Right>

        </Right>
        <Left>

        </Left>
      </Wrapper>
    </Container>
  )
}

export default Wallet
const Left = styled.div`
  width: 60%;
  height: 40px;
  background-color: green;
`
const Right = styled.div`
  width: 38%;
  height: 40px;
  background-color: red;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  background-color: #fff;
  padding: 13px 13px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`