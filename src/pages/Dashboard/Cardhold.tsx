import React from 'react'
import styled from 'styled-components'

const Cardhold = () => {
  return (
    <Container>
        <Card>
            <h3>Customers</h3>
            <h2>36,254</h2>
        </Card>
    </Container>
  )
}

export default Cardhold
const Card = styled.div`
    width: 200px;
    padding: 10px 13px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 19px;
        color: #000;
        font-weight: 500;
        margin-top: 5px;
    }
    h3{
        font-size: 17px;
        color: #797979;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: red;
    margin-top: 20px;
`