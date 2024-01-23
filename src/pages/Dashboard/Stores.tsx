import React from 'react'
import styled from 'styled-components'

const Stores = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Boxholder>
            <Store bg=""><h3>My Stores</h3></Store>
            <Verified><h3>Not Verified</h3></Verified>
          </Boxholder>
        </Top>
      </Wrapper>
    </Container>
  )
}

export default Stores
const Verified = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 16px;
    color: #797979;
  }
`
const Store = styled.div<{bg: string}>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg}) => (bg ? "#fff" : "#0030AD")};
  cursor: pointer;
  h3{
    font-size: 16px;
    color: #fff;
  }
`
const Boxholder = styled.div`
  width: 330px;
  height: 35px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #0030AD;
  display: flex;
`
const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`