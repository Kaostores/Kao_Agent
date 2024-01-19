import React from 'react'
import { Outlet } from "react-router-dom"
import { Dashboardhead, Sidebar } from '../Static'
import styled from 'styled-components'

const Dashboardlayout = () => {
  return (
    <Container>
        <Dashboardhead />
        <Sidebar />
        <Wrapper>
            <Outlet />
        </Wrapper>
    </Container>
  )
}

export default Dashboardlayout
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`