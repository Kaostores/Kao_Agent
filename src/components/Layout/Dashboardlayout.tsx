import React from 'react'
import { Outlet } from "react-router-dom"
import { Dashboardhead, Sidebar } from '../Static'

const Dashboardlayout = () => {
  return (
    <div>
        <Dashboardhead />
        <Sidebar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboardlayout