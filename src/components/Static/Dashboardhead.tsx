import React from 'react'
import styled from 'styled-components'

const Dashboardhead = () => {
  return (
    <Container>
      <Wrapper>
        <Inputhold>

        </Inputhold>
      </Wrapper>
    </Container>
  )
}

export default Dashboardhead
const Inputhold = styled.div`
  width: 250px;
  height: 35px;
  background-color: red;
  border-radius: 5px;
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