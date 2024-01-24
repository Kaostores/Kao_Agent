import React, {useState} from 'react'
import styled from 'styled-components'
import { MdOutlineStorefront } from "react-icons/md";

const Stores = () => {
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
            <div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Store ID</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Store Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Address</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Phone No</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>
    </tbody>
  </table>
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