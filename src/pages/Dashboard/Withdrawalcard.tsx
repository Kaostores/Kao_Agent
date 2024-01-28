import React from 'react'
import styled from 'styled-components'

const Withdrawalcard = () => {
  return (
    <Container>
        <Balancehold>
              <Balance>
                <h3>Withdrawal</h3>
              </Balance>
          </Balancehold>
          
          <Amountholder>
            <Amount>
                <h3><span>KAO</span> 0.00</h3>
            </Amount>
          </Amountholder>
    </Container>
  )
}

export default Withdrawalcard
const Amount = styled.div`
    display: flex;
    align-items: center;
    h3{
        color: #000;
        font-size: 20px;
        span{
            color: #0030AD;
        }
    }
`
const Amountholder = styled.div`
    display: flex;
    flex-direction: column;
`
const Balance = styled.div`
  display: flex;
  align-items: center;
  h3{
    color: #797979;
    font-size: 15px;
  }
`
const Balancehold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4{
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #008348;
  }
  h2{
    color: #008348;
    font-size: 13px;
  }
`

const Container = styled.div`
    width: 100%;
    padding: 10px 10px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 20px;
`