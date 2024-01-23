import React from 'react'
import { NavLink } from 'react-router-dom'

type iNavBar = {
    icon: any;
    page: string;
    path: string;
    is_active: boolean;
    dektop_only?: boolean;
    only_icons?: boolean;
    onclick?: () => void;
}

const Navbar: React.FC<iNavBar> = ({
    icon,
    page,
    path,
    is_active,
    dektop_only,
    onclick,
    only_icons
}) => {
  return (
    <NavLink
        onClick={onclick}
        style={{textDecoration: "none"}}
        className={`min-[800px]:hover:text-[green] ${
            dektop_only ? `max-[800px]:hidden` : ``
        } hover:text-[blue] max-[800px]:rounded-none transition-all duration-[.4s] min-[800px] :hover:bg-[#fff] rounded-[3px] overflow-hidden`}
        to={path}
    >
       <nav
        className={`max-[100%]:justify-center ${
            is_active ? `bg-[yellow] max-[100%]:bg-[transparent]` : `bg-[transparent]`
        }`}
       >
        <div className='ml-[15px] max-[800px]:ml-0 flex max-[800px]:flex-col  max-[800px]:gap-0 max-[800px]:justify-center max-[800px]:h-full items-center gap-[10px]'>
            <div className="text-[19px] max-[800px]:text-[24px]">{icon}</div>
          {!only_icons && (
            <div className="font-medium text-[12px] max-[800px]:text-[9px]">
              {page}
            </div>
          )}
        </div>
        </nav> 
    </NavLink>
  )
}

export default Navbar