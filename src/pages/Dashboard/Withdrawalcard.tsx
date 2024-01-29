import React, {useState} from 'react'
import styled from 'styled-components'
import { TbArrowsExchange2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Withdrawalcard = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const Toggle2 = () => {
        setShow2(!show2)
    }
    const Toggle = () => {
        setShow(!show)
    }
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
                  <Holder>
                      <Icon3><IoIosArrowDown /></Icon3>
                  <p>First Bank - Acc: ***1010</p>
                  </Holder>
                  <Button onClick={Toggle}>Send</Button>
              </Bankhold>
              <Button2 onClick={Toggle2}><Icon4><FaPlus /></Icon4><p>New Acc</p></Button2>
          </Boxhold>

          {show ? (
              <Modal>
            <Card>
                <Inputhold>
                    <input type="text" placeholder='Enter OTP'/>
                    <Button3>Send</Button3>
                </Inputhold>
            </Card>
          </Modal>
          ) : null}

          {show2 ? (
            <Modal>
            
          </Modal>
          ) : null}
    </Container>
  )
}

export default Withdrawalcard
const Button3 = styled.button`
    width: 84px;
    height: 35px;
    background-color: #0030AD;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    font-size: 14px;
`
const Inputhold = styled.div`
    width: 330px;
    height: 50px;
    border-radius: 7px;
    border: 1px solid #0030AD;
    display: flex;
    align-items: center;
    padding-right: 10px;
    overflow: hidden;
    justify-content: space-between;
    input{
        width: 200px;
        height: 100%;
        padding-left: 10px;
        outline: none;
    }
`
const Card = styled.div`
    width: 430px;
    height: 200px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #ffffff1f;
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
`
const Icon4 = styled.div`
    color: #0030AD;
`
const Button2 = styled.button`
    width: 120px;
    height: 38px;
    border: 1px solid #0030AD;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    p{
        margin-left: 3px;
        color: #0030AD;
        font-size: 15px;
    }
`
const Holder = styled.div`
    display: flex;
    align-items: center;
    p{
        font-size: 14px;
        margin-left: 5px;
    }
`
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
    width: 320px;
    height: 38px;
    border: 1px solid #0030AD;
    padding-left: 8px;
    padding-right: 12px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Boxhold = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
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
    padding-top: 10px;
    padding-bottom: 28px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 20px;
`