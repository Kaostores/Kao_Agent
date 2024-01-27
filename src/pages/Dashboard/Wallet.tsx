import React from 'react'
import styled from 'styled-components'

const Wallet = () => {
  return (
    <Container>
      <Wrapper>

      </Wrapper>
    </Container>
  )
}

export default Wallet
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 13px 13px;
  height: 40px;
  background-color: red;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`