import React from 'react'
import styled from 'styled-components'
import img from "../../assets/KAO_Logo_PNG.png"
import { FiHome } from "react-icons/fi";
import { BiStoreAlt } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location?.pathname;
  return (
    <Container>
      <Imageholder>
        <img src={img} alt="" />
      </Imageholder>

      <Home className={`${active === "/app/dashboard" && "active"}`} onClick={() => {
        navigate("/app/dashboard")
        }}>
          <Icon><FiHome /></Icon>
          <h3>Home</h3>
        </Home>

      <Home2 className={`${active === "/app/dashboard/stores" && "active"}`} onClick={() => {
        navigate("/app/dashboard/stores")
        }}>
          <Icon><BiStoreAlt /></Icon>
          <h3>Stores</h3>
        </Home2>

        <Home2 className={`${active === "/app/dashboard/wallet" && "active"}`} onClick={() => {
          navigate("/app/dashboard/wallet")
        }}>
          <Icon><IoWalletOutline /></Icon>
          <h3>Wallet</h3>
        </Home2>

        <Home2 className={`${active === "/app/dashboard/messages" && "active"}`} onClick={() => {
          navigate("/app/dashboard/messages")
        }}>
          <Icon><LuMessagesSquare /></Icon>
          <h3>Messages</h3>
          <Circle>1</Circle>
        </Home2>

      <Logout>
        Logout
      </Logout>
    </Container>
  )
}

export default Sidebar
const Logout = styled.div`
  width: 100%;
  height: 50px;
  background-color: #C7C7C7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  position: absolute;
  bottom: 0;
`
const Circle = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-radius: 50px;
  font-size: 12px;
  margin-left: 12px;
  margin-top: 3px;
`
const Icon = styled.div`
  font-size: 23px;
`
const Home2 = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
  margin-bottom: 5px;
  color: #fff;

  &.active{
    background-color: #fff;
    color: #0030AD;
  }
  h3{
    margin-left: 20px;
    font-size: 18px;
  }
`
const Home = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 40px;
  color: #fff;

  &.active{
    background-color: #fff;
    color: #0030AD;
  }
  h3{
    margin-left: 20px;
    font-size: 18px;
  }
`
const Imageholder = styled.div``
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0030AD;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  position: relative;
`