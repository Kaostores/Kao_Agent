import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { TiArrowDown } from "react-icons/ti";

const data = [
  {
    name: "Mon",
    cl: 3000,
    c2: 2400,
    c3: 1400,
  },
  {
    name: "Tue",
    cl: 2000,
    c2: 1000,
    c3: 2210,
  },
  {
    name: "Wed",
    cl: 1400,
    c2: 10100,
    c3: 1290,
  },
  {
    name: "Thu",
    cl: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "Fri",
    cl: 2200,
    c2: 1840,
    c3: 2210,
  },
  {
    name: "Sat",
    cl: 4480,
    c2: 2220,
    c3: 1110,
  },
  {
    name: "Sun",
    cl: 2220,
    c2: 1230,
    c3: 2569,
  },
]

const Dashboardhome = () => {
  return (
    <Container>
      <Wrapper>
        <Chartholder>
          <Top>
            <h3>Total Sales</h3>
            <Current>
              <Dot bg="#0030AD"></Dot>
              <p>Current Week</p>
              <h3>N31.00</h3>
            </Current>
            <Current>
              <Dot bg="#CED6DE"></Dot>
              <p>Previous Week</p>
              <h3>N31.00</h3>
            </Current>
            <Since>
              <Icon><TiArrowDown /></Icon>
              <p>16.21%</p>
              <h4>Since last week</h4>
            </Since>
          </Top>

          <Sales>
            <h3>Sales over time</h3>
          </Sales>
        </Chartholder>
      </Wrapper>
    </Container>
  )
}

export default Dashboardhome
const Sales = styled.div`
  margin-top: 23px;
  h3{
    font-size: 14px;
    color: #797979;
  }
`
const Icon = styled.div`
  color: #FF0000;
`
const Since = styled.div`
  display: flex;
  align-items: center;
  h4{
    font-size: 14px;
    color: #797979;
    margin-left: 10px;
  }
  p{
    font-size: 14px;
    color: #FF0000;
  }
`
const Dot = styled.div<{bg: string}>`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: ${({bg}) => bg};
`
const Current = styled.div`
  display: flex;
  align-items: center;
  p{
    font-size: 15px;
    color: #797979;
    margin-left: 12px;
  }
  h3{
    font-size: 18px;
    color: #000;
    font-weight: 500;
    margin-left: 15px;
  }
`
const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-size: 16px;
    color: #797979;
  }
`
const Chartholder = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
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
`