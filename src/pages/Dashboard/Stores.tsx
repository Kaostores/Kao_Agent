import React, {useState, ChangeEvent} from 'react'
import styled from 'styled-components'
import { MdOutlineStorefront, MdOutlineCancel } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import Notverified from './Notverified';
import Mystore from './Mystore';

const Stores: React.FC = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false)
  const [open, setOpen] = useState(false)
  const [documentopen, setDocumentopen] = useState(false)

  const document = () => {
    setDocumentopen(true)
    setOpen(false)
  }
  const openModal = () => {
    setOpen(!open)
  }
  const closeModal = () => {
    setOpen(false)
    setDocumentopen(false)
  }

  const Toogle = () => {
    setShow(true)
    setShow2(false)
  }
  const Toogle2 = () => {
    setShow2(true)
    setShow(false)
  }

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null)

  const handleFileChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const selected = files[0];
      setSelectedFile2(selected);
      handleFileUpload(selected);
    }
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const selected = files[0];
      setSelectedFile(selected);
      handleFileUpload(selected);
    }
  };
  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file);
  };
  return (
    <Container>
      <Wrapper>
        <Top>
          <Boxholder>
            <Store bg={show ? "bb" : ""} onClick={Toogle}><h3>My Stores</h3></Store>
            <Store bg={show2 ? "bb" : ""} onClick={Toogle2}><h3>Not Verified</h3></Store>
          </Boxholder>

          <Icon onClick={openModal}><MdOutlineStorefront /></Icon>

          {open ? (
            <Modal>
              <Card>
                <Add>
                  <h3>Add Store</h3>
                  <Cancle onClick={closeModal}><MdOutlineCancel /></Cancle>
                </Add>
                <Camerahold>
                  <Circle><IoCameraOutline /></Circle>
                  <h3>Store ID - 0002930</h3>
                </Camerahold>

                <Inputhold>
                  <Name>
                    <h3>Name</h3>
                    <input type="text" placeholder='Revolutionary Army'/>
                  </Name>
                  <Phone>
                    <Number>
                      <h3>Phone Number</h3>
                      <input type="text" placeholder='(234) 708 967 6060'/>
                    </Number>
                    <Number>
                      <h3>Email</h3>
                      <input type="email" placeholder='drlawdtrafalgar.gmail.com'/>
                    </Number>
                  </Phone>
                  <Address>
                    <h3>Address</h3>
                    <input type="text" placeholder='First Name'/>
                  </Address>
                </Inputhold>
                <Buttonhold>
                  <Button bg="#0030AD" cl="#fff" pl="" br="">Save</Button>
                  <Button onClick={document} bg="#fff" cl="#0030AD" pl="15px" br="1px solid #0030AD">
                    <I><HiOutlineDocumentArrowUp /></I>
                    Upload
                  </Button>
                </Buttonhold>
              </Card>
          </Modal>
          ) : null}

          {documentopen ? (
            <Documentmodal>
            <Card>
              <Add>
                <h3>Upload documents</h3>
                <Cancle onClick={closeModal}><MdOutlineCancel /></Cancle>
              </Add>
              <p>Revolutionary Army</p>
              <h4>Store ID - 0002930</h4>
              
              <Inputhold>
                <Name>
                    <h3>CAC DOCUMENT</h3>
                    <input id='fileinput' type="file" accept='.pdf, .doc, .docx' onChange={handleFileChange} style={{ display: "none" }} />
                    
                    <Button2 htmlFor='fileinput'>
                      {selectedFile ? (
                        <>
                          {selectedFile.name}
                        </>
                      ) : (
                        <>
                          Revolutionary ArmyCAC
                          <HiOutlineDocumentArrowUp style={{ marginLeft: '4px', fontSize: "20px" }} color='#0030AD'/>
                        </>
                      )}
                    </Button2>
                </Name>
                
                <Name2>
                    <h3>KYC</h3>
                    <input id='fileinput2' type="file" accept='.pdf, .doc, .docx' onChange={handleFileChange2} style={{ display: "none" }} />
                    
                    <Button2 htmlFor='fileinput2'>
                      {selectedFile2 ? (
                        <>
                          {selectedFile2.name}
                        </>
                      ) : (
                        <>
                          <p>Upload the titled document here</p>
                          <HiOutlineDocumentArrowUp style={{ marginLeft: '4px', fontSize: "20px" }} color='#0030AD'/>
                        </>
                      )}
                    </Button2>
                </Name2>
              </Inputhold>
            </Card>
          </Documentmodal>
          ) : null}
        </Top>

        {show ? (
          <Mystore />
        ) : null}

        {show2 ? (
          <Notverified />
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Stores
const Button2 = styled.label`
  cursor: pointer;
  width: 100%;
  height: 33px;
  border: 1px solid #0030AD;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: #797979;
  font-size: 14px;
  margin-top: 5px;
  p{
    color: #0030AD;
    font-size: 14px;
    font-style: italic;
  }
`
const Documentmodal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #f3f3f3b2;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
`
const I = styled.div`
  margin-right: 7px;
`
const Button = styled.button<{ bg: string; cl: string; pl: string;  br: string}>`
  width: 100px;
  height: 35px;
  background-color: ${({bg}) => bg};
  color: ${({cl}) => cl};
  border-radius: 5px;
  font-size: 14px;
  margin-left: ${({ pl }) => pl};
  border: ${({ br }) => br};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Buttonhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
`
const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  h3{
    font-size: 14px;
    color: #797979;
  }
  input{
    width: 100%;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #DEE3E9;
    padding-left: 10px;
    font-size: 12px;
    margin-top: 3px;
    outline: none;
  }
`
const Number = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  h3{
    font-size: 14px;
    color: #797979;
  }
  input{
    width: 100%;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #DEE3E9;
    padding-left: 10px;
    font-size: 12px;
    margin-top: 3px;
    outline: none;
  }
`
const Phone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
const Name2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  h3{
    font-size: 14px;
    color: #797979;
  }
  input{
    width: 100%;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #DEE3E9;
    padding-left: 10px;
    font-size: 12px;
    margin-top: 3px;
    outline: none;
  }
`
const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3{
    font-size: 14px;
    color: #797979;
  }
  input{
    width: 100%;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #DEE3E9;
    padding-left: 10px;
    font-size: 12px;
    margin-top: 3px;
    outline: none;
  }
`
const Inputhold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const Circle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  color: #0030AD;
  font-size: 22px;
`
const Camerahold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3{
    color: #0030AD;
    font-size: 14px;
    margin-top: 10px;
  }
`
const Cancle = styled.div`
  color: #0030AD;
  cursor: pointer;
`
const Add = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    color: #797979;
    font-size: 16px;
  }
`
const Card = styled.div`
  width: 350px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #0030AD;
  flex-direction: column;
  h4{
    color: #0030AD;
    font-size: 14px;
    margin-top: 6px;
  }
  p{
    color: #797979;
    font-size: 14px;
    margin-top: 5px;
  }
`
const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #f3f3f3b2;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
`

const Icon = styled.div`
  font-size: 28px;
  color: #0030AD;
  cursor: pointer;
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