import React, {useState} from 'react'
import styled from "styled-components"
import { MdOutlineCancel } from "react-icons/md";

const Messages = () => {
  const [show, setShow] = useState(false)

  const Toggle = () => {
    setShow(!show)
  }

  const CancleToggle = () => {
    setShow(false)
  }
  return (
    <Container>
      <Wrapper>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button onClick={Toggle}>View More</button>
          </Buttonhold>
        </Box>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button>View More</button>
          </Buttonhold>
        </Box>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button>View More</button>
          </Buttonhold>
        </Box>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button>View More</button>
          </Buttonhold>
        </Box>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button>View More</button>
          </Buttonhold>
        </Box>
        <Box>
          <Id><h4>Store ID: <span>0009021</span></h4></Id>
          <Id2><h4>Agent ID: <span>34567778</span></h4></Id2>
          <Id2><h4>Complaint Category: <span>Bribery</span></h4></Id2>
          <Id2><h4>Store Name: <span>Revolutionary Army</span></h4></Id2>
          <Id2><h4>Agent Name: <span>Solomon Teach</span></h4></Id2>
          <Id3><h4>Time|Date: 11:50 | 26/05/2023</h4></Id3>
          <Buttonhold>
            <button>View More</button>
          </Buttonhold>
        </Box>

        {show ? (
              <Modal>
            <Card>
                <Top>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <Store>
                    <h4>Store ID: <span>0009021</span></h4>
                  </Store>
                  <Name>
                    <h4>Store Name: <span>Revolutionary Army</span></h4>
                  </Name>
                  </div>
                  <Icon onClick={CancleToggle}><MdOutlineCancel /></Icon>
                </Top>
                <Top2>
                  <Store>
                    <h4>Agent ID: <span>34567778</span></h4>
                  </Store>
                  <Name>
                    <h4>Agent Name: <span>Solomon Teach</span></h4>
                  </Name>
                </Top2>
                <Top3>
                  <Store>
                    <h4>Complaint Category: <span>Bribery</span></h4>
                  </Store>
                  <Name>
                    <Id3><h4 style={{fontSize: "14px"}}>Time|Date: 11:50 | 26/05/2023</h4></Id3>
                  </Name>
              </Top3>
              <Textspace>
                <p>Description: I have paid the required registration amount and was asked by my agent , Mr Solomon to pay 35,000 extra if I want my account verified  before the holidays. I was not officially told this by the company I asked for proof but he was rude to me and left and I am still not verified</p>
              </Textspace>
              <TextArea>
                <textarea name="" id=""></textarea>
              </TextArea>

              <Down>
                <select>
                  <option value="">Diciplinary Action</option>
                </select>
                <Holds>
                  <Button cl="#797979" bd="1px solid #797979" bg="">
                    Send Reply
                  </Button>
                  <Button cl="#fff" bd="" bg="#0030AD">
                    Done
                  </Button>
                </Holds>
              </Down>
            </Card>
          </Modal>
          ) : null}
      </Wrapper>
    </Container>
  )
}

export default Messages
const Icon = styled.div`
  color: #0030AD;
  cursor: pointer;
`
const Button = styled.button<{ cl: string;  bd: string; bg: string}>`
  width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({bd}) => bd};
    border-radius: 5px;
    font-size: 14px;
    color: ${({ cl }) => cl};
    background-color: ${({ bg }) => bg};
    outline: none;
    margin-left: 15px;
`
const Holds = styled.div`
  display: flex;
  align-items: center;
`
const Down = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  select{
    width: 190px;
    height: 40px;
    border: 1px solid #797979;
    border-radius: 3px;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }
`
const TextArea = styled.div`
  margin-top: 15px;
  textarea{
    width: 100%;
    display: flex;
    border: 1px solid #0030AD;
    border-radius: 5px;
    resize: none;
    height: 120px;
    outline: none;
    padding: 10px 10px;
    font-size: 14px;
  }
`
const Textspace = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  p{
    font-size: 14px;
  }
`
const Name = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  h4{
    color: #000;
    font-size: 14px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Store = styled.div`
  display: flex;
  align-items: center;
  h4{
    color: #000;
    font-size: 14px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Top3 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
`
const Top2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Card = styled.div`
    width: 700px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    display: flex;
    position: relative;
    padding: 20px 20px;
    flex-direction: column;
`
const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #ffffff1f;
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
`
const Buttonhold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  button{
    width: 140px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid #0030AD;
    color: #0030AD;
    border-radius: 5px;
    background-color: #fff;
    font-size: 15px;
  }
`
const Id3 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  h4{
    color: #797979;
    font-size: 15px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Id2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  h4{
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Id = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  h4{
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    span{
      color: #0030AD;
    }
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  background-color: #0031ad24;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 25px;
`

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px 20px;
  justify-content: space-between;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`