import React, { useState } from 'react'
import styled from 'styled-components';
import { MdOutlineStorefront, MdOutlineCancel } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";

const Mystore = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
    const tableItems = [
        {
            name: "1",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "2",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "3",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "4",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "5",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "6",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "7",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "8",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "9",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "10",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "11",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "12",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "13",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "14",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "15",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "16",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "17",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "18",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "19",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "20",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "21",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "22",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "23",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "24",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "25",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "26",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "27",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "28",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "29",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "30",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "31",
            date: "2356477",
            status: "Verified",
            price: "Zoro Roronoa",
            plan: "Small Village, East Blue",
            phone: "+234 02356477",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "32",
            date: "7688801",
            status: "Verified",
            price: "Nico Robin",
            plan: "The Lost Island, Grandline",
            phone: "+234 07688801",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "33",
            date: "0032648",
            status: "Verified",
            price: "Sanji Vinsmoke",
            plan: "The Lost Island, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "34",
            date: "9237584",
            status: "Verified",
            price: "Tony Chopper",
            plan: "Vinsmoke Island, East Blue",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "35",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Drum Island, Castle, Geandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "36",
            date: "02938423",
            status: "Verified",
            price: "General Franky",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "37",
            date: "09365322",
            status: "Verified",
            price: "Brook",
            plan: "Water 7, Grandline",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "38",
            date: "09533555",
            status: "Verified",
            price: "Jinbe",
            plan: "Lost Ship, Park",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "39",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Atlantia,   Sea barrel ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
        {
            name: "40",
            date: "23322222",
            status: "Verified",
            price: "Usopp",
            plan: "Small Village ",
            phone: "+234 00032648",
            email: "revolutionarmy.gmail.com"
        },
  ]
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(tableItems.length / itemsPerPage)

  const paginatedItems = tableItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <Container>
        <div className="max-w-screen-xl mx-auto px-2 md:px-8">
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">#</th>
                            <th className="py-3 pr-6">Store ID</th>
                            <th className="py-3 pr-6">Store Name</th>
                            <th className="py-3">Address</th>
                            <th className="py-3 pr-6">Phone No</th>
                            <th className="py-3 pr-6">Email</th>
                            <th className="py-3 pr-6">Status</th>
                            <th className="py-3 pr-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                    {paginatedItems.map((item, idx) => (
                          <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="pr-6 py-4">{item.plan}</td>
                                    <td className=" py-4">{item.phone}</td>
                                    <td className="pr-6 py-4">{item.email}</td>
                                    <td className="w-[80px] h-[30px] flex justify-center items-center mt-[20px] whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-[3px] font-semibold text-xs ${
                                            item.status === "Verified" ? "text-[#0030AD] bg-[#0031ad1c]" :
                                            item.status === "Inspect" ? "text-[#008348] bg-[#00834838]" :
                                            item.status === "Not Verified" ? "text-[#FF0000] bg-[#ff00002f]" :
                                            "text-[#797979] bg-[#79797941]"
                                          }`}>{item.status}
                                          </span>
                                    </td>
                                    <td  className="px-6 py-4 text-[19px] text-[#0030AD] cursor-pointer ml-[30px]"><MdOutlineStorefront onClick={Toggle}/></td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Down>
              <h3>Showing {Math.min(currentPage * itemsPerPage, tableItems.length)} of{' '} {tableItems.length}</h3>
              <Pagination>
              <ul>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
              </Pagination>
              <Button>gfgfgfgfgfgffg</Button>
        </Down>
        
        {show ? (
            <Modal>
            <Card>
                <Add>
                  <h3>Edit Store</h3>
                  <Cancle><MdOutlineCancel /></Cancle>
                </Add>
                
                <Camerahold>
                  <Circle><IoCameraOutline /></Circle>
                  <h3>Store ID - 0002930</h3>
                </Camerahold>
                
                <Inputhold>
                    <Name>
                    <h3>Name</h3>
                    <input type="text" placeholder='Revolutionary Army'/>
                  </Name>
                  <Address>
                    <h3>Phone Number</h3>
                    <input type="text" placeholder='(234) 708 967 6060'/>
                  </Address>
                  <Address>
                    <h3>Address</h3>
                    <input type="text" placeholder='First Name'/>
                  </Address>
                  <Address>
                    <h3>
                        <h4> <HiOutlineDocumentArrowUp />Upload</h4>
                    </h3>
                    <input type="text" placeholder='First Name'/>
                  </Address>
                </Inputhold>
            </Card>
        </Modal>
        ) : null}
    </Container>
  )
}

export default Mystore
const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  h4{
    font-size: 14px;
    color: #0030AD;
  }
  h3{
    justify-content: space-between;
  }
  input{
    width: 100%;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #DEE3E9;
    padding-left: 10px;
    font-size: 12px;
    margin-top: 3px;
    outline: none;
  }
`
const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3{
    font-size: 14px;
    color: #797979;
  }
  input{
    width: 100%;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #DEE3E9;
    padding-left: 10px;
    font-size: 12px;
    margin-top: 3px;
    outline: none;
  }
`
const Inputhold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const Circle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  color: #0030AD;
  font-size: 22px;
`
const Camerahold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3{
    color: #0030AD;
    font-size: 14px;
    margin-top: 10px;
  }
`
const Cancle = styled.div`
  color: #0030AD;
  cursor: pointer;
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
  h4{
    color: #0030AD;
    font-size: 14px;
    margin-top: 6px;
  }
  p{
    color: #797979;
    font-size: 14px;
    margin-top: 5px;
  }
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
  transition: all 350ms ease-in-out;
`
const Button = styled.div`
  visibility: hidden;
`
const Pagination = styled.div`
  margin-top: 10px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
      margin-right: 5px;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      &.active {
        background-color: #0030ad;
        color: #fff;
      }
    }
  }
`
const Down = styled.div`
  width: 100%;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }
`
const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    padding-top: 10px;
    flex-direction: column;
    p{
        font-size: 14px;
        font-style: italic;
        color: #000000;
        margin-bottom: 0;
        margin-top: 5px;
    }
`