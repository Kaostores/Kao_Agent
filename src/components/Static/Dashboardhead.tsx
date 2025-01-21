import React, {useState} from 'react'
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";
import { LuPrinter, LuFolderOpenDot  } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useGetUserDataQuery } from "../../components/services/apiSlice";
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { LogOut } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { logoutUser } from "../../components/services/reducers"
import { useDispatch } from "react-redux"

const Dashboardhead: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const { data: userData, isLoading: isUserDataLoading } = useGetUserDataQuery(undefined);
  const location = useLocation();
	const navigate = useNavigate()
	const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    toast.success("You have logged out successfully", {
      autoClose: 3000,
      closeButton: true,
      onClose: () => {
        navigate("/")
      },
    })
  }

  const getLastSevenDays = (): string[] => {
    const today = new Date();
    const lastSevenDays = Array.from({ length: 7 }, (_, index) => {
      const day = new Date(today);
      day.setDate(today.getDate() - index);
      return day.toISOString().split("T")[0]
    })
    return lastSevenDays
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value)
  }

  return (
    <Container>
      <Wrapper>
        <First>
          <Inputhold>
          <Icon><IoSearch /></Icon>
          <input type="text" placeholder='Search'/>
        </Inputhold>

        <Calendar>
          <Icon2><MdOutlineCalendarToday /></Icon2>
          <Select value={selectedDate} onChange={handleSelectChange}>
            <option disabled value="">Last 7 days</option>
            {getLastSevenDays().map((date) => (
              <option value={date} key={date}>
                {date}
              </option>
            ))}
          </Select>
          <Icon3><IoIosArrowDown /></Icon3>
        </Calendar>
        </First>
        <Second>
          <Downloadholder>
          <Left>
            <LuPrinter />
          </Left>
          <Right>
            <LuFolderOpenDot />
          </Right>
        </Downloadholder>
        <Setings>
          <IoSettingsOutline />
        </Setings>
        <Notificationholder>
          <IoIosNotificationsOutline />
          <Dot></Dot>
        </Notificationholder>
        <div className="">
									<Button
									variant="secondary"
									className="w-full bg-white text-[#0333ae] text-[15px] hover:bg-white/90"
									onClick={handleLogout}
									>
									<LogOut className="mr-2 h-4 w-4" />
									Logout
									</Button>
								</div>
        <div className='pl-[15px] py-[10px] pr-[15px] bg-[#0333ae] xl:flex sm:flex justify-between items-center rounded-[5px] overflow-hidden ml-[20px]'>
									<div className='w-[25px] overflow-hidden h-[25px] rounded-[50%] bg-[#fff]'>
										<img src="" alt="" className="w-[100%] h-[100%] object-cover"/>
									</div>
									<div className='xl:text-[16px] text-[#fff] sm:text-[10px] ml-[8px] md:text-[14px]'>
										{isUserDataLoading ? (
											<Skeleton className="h-4 w-[80px]" />
										) : (
											userData?.data.firstname
										)}
									</div>
							</div>
        </Second>
      </Wrapper>
    </Container>
  )
}

export default Dashboardhead
const Select = styled.select`
  height: 100%;
  cursor: pointer;
  appearance: none;
  padding-left: 10px;
  flex: 1;
  &:focus{
    outline: none;
  }
`
const Icon3 = styled.div`
  color: #0030AD;
`
const Icon2 = styled.div`
  color: #0030AD;
`
const Second = styled.div`
  display: flex;
  align-items: center;
`
const First = styled.div`
  display: flex;
  align-items: center;
`
const Circle = styled.div`
  width: 37px;
  height: 37px;
  background-color: #FF7600;
  border-radius: 100px;
`
const Profileholder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  h3{
    font-size: 16px;
    margin-left: 10px;
  }
`
const Dot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50px;
  background-color: #0030AD;
  position: absolute;
  top: 5px;
  right: 8px;
`
const Notificationholder = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C7C7C7;
  cursor: pointer;
  font-size: 25px;
  margin-top: 2px;
  margin-left: 15px;
  position: relative;
`
const Setings = styled.div`
  color: #0030AD;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #0030AD;
  cursor: pointer;
  align-items: center;
  background-color: #fff;
`
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  align-items: center;
  background-color: #0030AD;
`
const Downloadholder = styled.div`
  width: 80px;
  height: 35px;
  border: 1px solid #DEE3E9;
  border-radius: 5px;
  margin-left: 10px;
  overflow: hidden;
  display: flex;
`
const Calendar = styled.div`
  width: 250px;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #DEE3E9;
  display: flex;
  align-items: center;
  margin-left: 13px;
  padding-left: 5px;
  padding-right: 5px;
  overflow: hidden;
  input{
    height: 100%;
    border: none;
    outline: none;
    margin-left: 10px;
    margin-top: 3px;
    flex: 1;
  }
`
const Icon = styled.div`
  color: #0030AD;
  font-size: 17px;
`
const Inputhold = styled.div`
  width: 250px;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #DEE3E9;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  overflow: hidden;
  input{
    flex: 1;
    margin-left: 10px;
    outline: none;
    height: 100%;
  }
`
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`