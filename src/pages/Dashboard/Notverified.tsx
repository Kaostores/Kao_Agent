import React, { useState } from 'react'
import styled from 'styled-components';
import { MdOutlineStorefront } from "react-icons/md";

const Notverified = () => {
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
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
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
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-[3px] font-semibold text-xs ${
                                            item.status === "Verified" ? "text-[#0030AD] bg-[#0031ad1c]" :
                                            item.status === "Inspect" ? "text-blue-600 bg-blue-50" :
                                            item.status === "Not Verified" ? "text-purple-600 bg-purple-50" :
                                            "text-yellow-600 bg-yellow-50"
                                          }`}>{item.status}
                                          </span>
                                    </td>
                                    <td className="pr-6 py-4 text-[19px] text-[#0030AD] cursor-pointer"><MdOutlineStorefront /></td>
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
    </Container>
  )
}

export default Notverified
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
`