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
  width: 53%;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  width: 44%;
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 13px 13px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`