import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { CartesianGrid } from 'recharts';

const Tableholds = () => {
  const data = [
    { name: 'Mon', x: 45, y: 12, z: 0 },

        { name: 'Tue', x: 85, y: 15, z: 0 },

        { name: 'Wed', x: 65, y: 30, z: 10 },

        { name: 'Thu', x: 55, y: 40, z: 10 },

        { name: 'Fri', x: 70, y: 45, z: 10 },

        { name: 'Sat', x: 62, y: 25, z: 10 },

        { name: 'Sun', x: 37, y: 17, z: 10 },
  ]
  return (
    <Container>
        <First>
          <Paymentholder>
            <h3>Payment Method</h3>
            <Icon><BsThreeDotsVertical /></Icon>
          </Paymentholder>
          <Chartholder>
            <Hold>
              <BarChart width={260} height={190} data={data}>
                {/* <CartesianGrid /> */}
                <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
   
                <Bar dataKey="z" stackId="a" fill='#EED600' barSize={10}/>
                <Bar dataKey="y" stackId="a" fill='#88A9FF' barSize={10}/>
                <Bar dataKey="x" stackId="a" fill='#0030AD' barSize={10}/>
              </BarChart>
            </Hold>
          </Chartholder>
        </First>
    </Container>
  )
}

export default Tableholds
const Hold = styled.div`
  margin-top: 20px;
`
const Chartholder = styled.div`
  display: flex;
  width: 100%;
`
const Icon = styled.div`
  cursor: pointer;
`
const Paymentholder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-size: 17px;
    color: #000;
  }
`
const First = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  padding: 13px 13px;
  background-color: #fff;
  border-radius: 5px;
`
const Container = styled.div`
    display: flex;
    margin-top: 20px;
`