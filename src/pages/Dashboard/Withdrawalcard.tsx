import React from 'react'
import styled from 'styled-components'
import { TbArrowsExchange2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

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
                <Icon><TbArrowsExchange2 /></Icon>
                <h2><span><Icon2><IoIosArrowDown /></Icon2>NGN </span> <p>0.00</p></h2>
            </Amount>
            <Rate><h4>Exchange rate KAO 1.01 = NGN 5.00 </h4></Rate>
          </Amountholder>

          <Boxhold>
              <Bankhold>
                  <div>
                      <Icon3><IoIosArrowDown /></Icon3>
                  <p>First Bank - Acc: ***1010</p>
                  </div>
                  <Button>Send</Button>
              </Bankhold>
          </Boxhold>
    </Container>
  )
}

export default Withdrawalcard
const Button = styled.button`
    width: 80px;
    height: 32px;
    background-color: #0030AD;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    font-size: 14px;
`
const Icon3 = styled.div`
    color: #0030AD;
`
const Bankhold = styled.div`
    width: 300px;
    height: 38px;
    border: 1px solid #0030AD;
    padding-left: 8px;
    padding-right: 12px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 14px;
        margin-left: 5px;
    }
`
const Boxhold = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`
const Rate = styled.div`
    margin-top: 2px;
    h4{
        color: #008348;
        font-size: 13px;
    }
`
const Icon2 = styled.div`
    color: #0030AD;
    margin-right: 3px;
    font-size: 16px;
`
const Icon = styled.div`
    margin-left: 20px;
    font-size: 18px;
`
const Amount = styled.div`
    display: flex;
    align-items: center;
    h2{
        color: #000;
        font-size: 20px;
        display: flex;
        align-items: center;
        margin-left: 20px;
        p{
            margin-left: 5px;
            font-weight: 500;
        }
        span{
            color: #0030AD;
            display: flex;
            align-items: center;
        }
    }
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
    margin-top: 20px;
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