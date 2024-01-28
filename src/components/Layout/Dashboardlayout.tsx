import React from 'react'
import { Outlet } from "react-router-dom"
import { Sidebar, Dashboardhead } from '../Static'

const Dashboardlayout: React.FC = () => {
  return (
    <>
      <div className='w-full h-screen relative flex max-[800px]:hidden bg-[#F3F3F3]'>
        <div className='w-[20%] h-full sticky top-0 left-0'>
          <Sidebar />
        </div>
        <div className='flex-1 h-full relativen overflow-x-hidden'>
          <div className='w-full h-[70px] sticky z-[2] top-0 right-0 bg-[red]'>
            <Dashboardhead />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboardlayout