import React, {useState} from 'react'
import styled from 'styled-components'
import { MdOutlineStorefront, MdOutlineCancel } from "react-icons/md";
import Notverified from './Notverified';
import Mystore from './Mystore';

const Stores = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false)
  const [open, setOpen] = useState(false)


  const openModal = () => {
    setOpen(!open)
  }

  const Toogle = () => {
    setShow(true)
    setShow2(false)
  }
  const Toogle2 = () => {
    setShow2(true)
    setShow(false)
  }
  return (
    <Container>
      <Wrapper>
        <Top>
          <Boxholder>
            <Store bg={show ? "bb" : ""} onClick={Toogle}><h3>My Stores</h3></Store>
            <Store bg={show2 ? "bb" : ""} onClick={Toogle2}><h3>Not Verified</h3></Store>
          </Boxholder>

          <Icon onClick={openModal}><MdOutlineStorefront /></Icon>

          {open ? (
            <Modal>
              <Card>
                <Add>
                  <h3>Add Store</h3>
                  <Cancle><MdOutlineCancel /></Cancle>
                </Add>
              </Card>
          </Modal>
          ) : null}
        </Top>

        {show ? (
          <Mystore />
        ) : null}

        {show2 ? (
          <Notverified />
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Stores
const Cancle = styled.div`
  color: #0030AD;
`
const Add = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    color: #797979;
    font-size: 16px;
  }
`
const Card = styled.div`
  width: 350px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #0030AD;
  flex-direction: column;
`
const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #f3f3f3b2;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  font-size: 28px;
  color: #0030AD;
  cursor: pointer;
`
const Store = styled.div<{bg: string}>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg}) => (bg ? "#0030AD" : "#fff")};
  cursor: pointer;
  color: ${({bg}) => (bg ? "#fff" : "#797979")};
  h3{
    font-size: 16px;
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
  justify-content: space-between;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
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