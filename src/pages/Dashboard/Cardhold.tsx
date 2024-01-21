import React from 'react'
import styled from 'styled-components'
import { TiArrowUp } from "react-icons/ti";

const Cardhold = () => {
  return (
    <Container>
        <Card>
            <h3>Customers</h3>
              <h2>36,254</h2>
              <Percent cl="#008348">
                  <Hold>
                      <Icon><TiArrowUp /></Icon>
                      <h4>3.27%</h4>
                  </Hold>
                  <p>Since last week</p>
              </Percent>
        </Card>
        <Card>
            <h3>Stores</h3>
              <h2>5,543</h2>
              <Percent cl="#FF0000">
                  <Hold>
                      <Icon><TiArrowUp /></Icon>
                      <h4>3.27%</h4>
                  </Hold>
                  <p>Since last week</p>
              </Percent>
        </Card>
        <Card>
            <h3>Revenue</h3>
              <h2>N6,220</h2>
              <Percent cl="#FF0000">
                  <Hold>
                      <Icon><TiArrowUp /></Icon>
                      <h4>3.27%</h4>
                  </Hold>
                  <p>Since last week</p>
              </Percent>
        </Card>
        <Card>
            <h3>Average Order Value</h3>
              <h2>+30.56%</h2>
              <Percent cl="#008348">
                  <Hold>
                      <Icon><TiArrowUp /></Icon>
                      <h4>3.27%</h4>
                  </Hold>
                  <p>Since last week</p>
              </Percent>
        </Card>
    </Container>
  )
}

export default Cardhold
const Hold = styled.div`
    display: flex;
    align-items: center;
    h4{
        font-size: 14px;
    }
`
const Icon = styled.div``
const Percent = styled.div<{cl: string}>`
    display: flex;
    align-items: center;
    color: ${({cl}) => cl};
    margin-top: 12px;
    p{
        color: #797979;
        font-size: 13px;
        margin-left: 15px;
    }
`
const Card = styled.div`
    width: 220px;
    padding: 10px 13px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 19px;
        color: #000;
        font-weight: 500;
        margin-top: 12px;
    }
    h3{
        font-size: 17px;
        color: #797979;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`