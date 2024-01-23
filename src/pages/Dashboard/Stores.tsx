import React from 'react'
import styled from 'styled-components'

const Stores = () => {
  return (
    <Container>
      <Wrapper>

      </Wrapper>
    </Container>
  )
}

export default Stores
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
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