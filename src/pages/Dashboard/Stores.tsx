import React, {useState} from 'react'
import styled from 'styled-components'

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
        </Top>

        {show ? (
          <Storetableholder>

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
const Verifiedtableholder = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
  margin-top: 20px;
`
const Storetableholder = styled.div`
  width: 100%;
  height: 40px;
  background-color: red;
  margin-top: 20px;
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