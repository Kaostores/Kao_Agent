import React, {useState} from 'react'
import styled from 'styled-components'
import { MdOutlineStorefront } from "react-icons/md";
import Pagination from '../Pagination';

const Stores = () => {
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
  ]
  
  const [currentPage, setCurrentPage] = useState(1);
  const ItemsPerPage = 10;

  const totalItems = tableItems.length

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  };

  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const currentData = tableItems.slice(startIndex, endIndex)

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false)

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

          <Icon><MdOutlineStorefront /></Icon>
        </Top>

        {show ? (
          <Storetableholder>
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
                            {currentData.map((item, idx) => (
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
          <h3>Showing 10 of 40</h3>
              <Pagination totalItems={totalItems} itemsPerPage={ItemsPerPage} onPageChange={handlePageChange} />
        </Down>
        </Storetableholder>
        ) : null}

        {show2 ? (
          <Verifiedtableholder>

        </Verifiedtableholder>
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Stores
const Down = styled.div`
  width: 60%;
  margin-top: 12px;
  h3{
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }
`
const Icon = styled.div`
  font-size: 28px;
  color: #0030AD;
  cursor: pointer;
`
const Verifiedtableholder = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
  margin-top: 20px;
`
const Storetableholder = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 10px;
  flex-direction: column;
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