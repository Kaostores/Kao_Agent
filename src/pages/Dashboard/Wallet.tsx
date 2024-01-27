import React from 'react'
import styled from 'styled-components'
import { IoWalletOutline } from "react-icons/io5";

const Wallet = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Top>
            <Balancehold>
              <Balance>
                <Icon1><IoWalletOutline /></Icon1>
                <h3>Balance</h3>
              </Balance>
              <Kao>
                <h3>KAO</h3>
                <p>NGN</p>
              </Kao>
            </Balancehold>
          </Top>
        </Right>
        <Left>

        </Left>
      </Wrapper>
    </Container>
  )
}

export default Wallet
const Kao = styled.div`
  display: flex;
  align-items: center;
  h3{
    color: #0030AD;
    font-size: 15px;
  }
  p{
    color: #C7C7C7;
    font-size: 13px;
    font-weight: 600;
    margin-left: 5px;
  }
`
const Icon1 = styled.div`
  color: #0030AD;
  font-size: 20px;
`
const Balance = styled.div`
  display: flex;
  align-items: center;
  h3{
    color: #797979;
    font-size: 15px;
    margin-left: 7px;
  }
`
const Balancehold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Top = styled.div`
  width: 100%;
  padding: 10px 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Left = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  width: 42%;
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