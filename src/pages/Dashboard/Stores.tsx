import React, {useState} from 'react'
import styled from 'styled-components'
import { MdOutlineStorefront } from "react-icons/md";

const Stores = () => {
  const tableItems = [
        {
            name: "1",
            date: "2356477",
            status: "Active",
            price: "$35.000",
            plan: "Monthly subscription"
        },
        {
            name: "2",
            date: "7688801",
            status: "Active",
            price: "$12.000",
            plan: "Monthly subscription"
        },
        {
            name: "3",
            date: "0032648",
            status: "Archived",
            price: "$20.000",
            plan: "Annually subscription"
        },
        {
            name: "4",
            date: "9237584",
            status: "Active",
            price: "$5.000",
            plan: "Monthly subscription"
        },
        {
            name: "5",
            date: "02938423",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
        {
            name: "6",
            date: "02938423",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
        {
            name: "7",
            date: "09365322",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
        {
            name: "8",
            date: "09533555",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
        {
            name: "9",
            date: "23322222",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
        {
            name: "10",
            date: "23322222",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
    ]

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
                            <th className="py-3 pr-6">Address</th>
                            <th className="py-3 pr-6">Phone No</th>
                            <th className="py-3 pr-6">Email</th>
                            <th className="py-3 pr-6">Status</th>
                            <th className="py-3 pr-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="text-right whitespace-nowrap">
                                        <a href="javascript:void()" className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                            Manage
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
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
  background-color: red;
  margin-top: 20px;
  padding-top: 10px;
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
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`