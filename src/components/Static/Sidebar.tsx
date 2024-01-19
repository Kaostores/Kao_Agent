import React from 'react'
import styled from 'styled-components'
import img from "../../assets/KAO_Logo_PNG.png"
import { FiHome } from "react-icons/fi";
import { BiStoreAlt } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Container>
      <Imageholder>
        <img src={img} alt="" />
      </Imageholder>

      <NavLink to="" style={({ isActive }) => {
        return {
          height: isActive ? "50px" : "50px",
          width: isActive ? "100%" : "100%",
          backgroundColor: isActive ? "#fff" : "",
          marginTop: isActive ? "50px" : "50px",
          paddingLeft: isActive ? "30px" : "30px",
          color: isActive ? "#0030AD" : "#fff",
          alignItems: isActive ? "center" : "center",
          display: isActive ? "flex" : "flex"
        }
      }}>
        <Home>
          <Icon><FiHome /></Icon>
          <h3>Home</h3>
        </Home>
      </NavLink>

      <NavLink to="" style={({ isActive }) => {
        return {
          height: isActive ? "50px" : "50px",
          width: isActive ? "100%" : "100%",
          backgroundColor: isActive ? "#fff" : "",
          marginTop: isActive ? "10px" : "10px",
          paddingLeft: isActive ? "30px" : "30px",
          color: isActive ? "#0030AD" : "#fff",
          alignItems: isActive ? "center" : "center",
          display: isActive ? "flex" : "flex"
        }
      }}>
        <Home>
          <Icon><BiStoreAlt /></Icon>
          <h3>Stores</h3>
        </Home>
      </NavLink>

      <NavLink to="" style={({ isActive }) => {
        return {
          height: isActive ? "50px" : "50px",
          width: isActive ? "100%" : "100%",
          backgroundColor: isActive ? "#fff" : "",
          marginTop: isActive ? "10px" : "10px",
          paddingLeft: isActive ? "30px" : "30px",
          color: isActive ? "#0030AD" : "#fff",
          alignItems: isActive ? "center" : "center",
          display: isActive ? "flex" : "flex"
        }
      }}>
        <Home>
          <Icon><IoWalletOutline /></Icon>
          <h3>Wallet</h3>
        </Home>
      </NavLink>

      <NavLink to="" style={({ isActive }) => {
        return {
          height: isActive ? "50px" : "50px",
          width: isActive ? "100%" : "100%",
          backgroundColor: isActive ? "#fff" : "",
          marginTop: isActive ? "10px" : "10px",
          paddingLeft: isActive ? "30px" : "30px",
          color: isActive ? "#0030AD" : "#fff",
          alignItems: isActive ? "center" : "center",
          display: isActive ? "flex" : "flex"
        }
      }}>
        <Home>
          <Icon><LuMessagesSquare /></Icon>
          <h3>Messages</h3>
          <Circle>1</Circle>
        </Home>
      </NavLink>
    </Container>
  )
}

export default Sidebar
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
const Home = styled.div`
  display: flex;
  cursor: pointer;
  h3{
    margin-left: 20px;
    font-size: 18px;
  }
`
const Imageholder = styled.div``
const Container = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #0030AD;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
`