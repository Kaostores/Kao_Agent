import React from 'react'
import img from "../../assets/Design stats-amico.png"
import img2 from "../../assets/design.png"
import img3 from "../../assets/KAO_Logo_PNG.png"
import styled from "styled-components"
import { GoPerson } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import { Logins } from '../../components/utils/ApiCalls'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from "react-hook-form"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateUserDetails } from '../../components/services/reducers'
import { CgSpinner } from 'react-icons/cg';

const formSchema = z.object({
    email: z.string().min(2, {
        message: "email is required",
    }),
    password: z.string().min(2, {
        message: "password is required"
    })
})

const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoad(true);
        try {
            const response: any = await Logins(values);
    
            if (response?.status === 200) {
                toast.success("Login Successful");
                cookies.set("Kao_cookie_admin", response?.data?.token, {
                    expires: expiryDate,
                    path: "/",
                });
              console.log(response)
                dispatch(updateUserDetails(response?.data.data));
                navigate("/app/dashboard");
            } else if (response?.status === 500) {
                toast.error("Server error: Details do not match");
            } else if (response?.response?.status === 401) {
                toast.info("Unauthorized: Invalid Credentials");
            } else {
                toast.info("Unexpected response: " + response?.status);
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoad(false);
        }
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    const [load, setLoad] = useState(false);
  return (
    <Container>
        <Left>
            <Imageholder>
                {/* <img src={img2} alt="img1" /> */}
            </Imageholder>
            <Card>
                <img src={img} alt="" />
            </Card>
            <Circle>
                <img src={img3} alt="" />
            </Circle>
        </Left>
        
        <Right>
            <Box onSubmit={form.handleSubmit(onSubmit)}>
                <h2>Welcome!</h2>
                <Inputhold>
                    <Icon><GoPerson /></Icon>
                    <input 
                        type="email" 
                        placeholder='Email'
                        {...form.register("email")}
                    />
                </Inputhold>
                <Inputhold2>
                    <Icon><CiLock /></Icon>
                    <input 
                        type="password" 
                        placeholder='Password'
                        {...form.register("password")}
                    />
                </Inputhold2>
                <Forgot>
                    <p>Forgot Password?</p>
                </Forgot>
                <Remember>
                    <input type="checkbox" />
                    <p>Remember me</p>
                </Remember>
                <Button
                    bg="#0030AD"
                    cl="#fff"
                    fs="16px"
                    type="submit"
                    disabled={load}
                    loading={load}
                >
                    {load && <LoadingSpinner />}
                    {load ? 'Logging In...' : 'Log In'}
                </Button>
                  <NavLink to="/welcome">
                      <Button bg="" cl="#0030AD" fs="14px">
                    Sign Up
                </Button>
                </NavLink>
            </Box>
        </Right>
    </Container>
  )
}

export default Login
const LoadingSpinner = styled(CgSpinner)`
  animation: spin 1s linear infinite;
  margin-right: 10px;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Button = styled.button<{ bg: string; cl: string; fs: string; loading?: boolean }>`
  background-color: ${({ bg }) => bg};
  color: ${({ cl }) => cl};
  font-size: ${({ fs }) => fs};
  padding: 10px 20px;
  border: none;
  width: 300px;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  opacity: ${({ loading }) => (loading ? 0.7 : 1)};
  cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
  font-weight: 400;
  border-radius: 5px;
`;
// const Button = styled.button<{ bg: string; cl: string;  fs: string}>`
//     width: 300px;
//     height: 40px;
//     background-color: ${({bg}) => bg};
//     border-radius: 5px;
//     display: flex;
//     margin-top: 15px;
//     justify-content: center;
//     align-items: center;
//     color: ${({cl}) => cl};
//     cursor: pointer;
//     font-size: ${({fs}) => fs};
//     font-weight: 400;
// `
const Remember = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin-top: 30px;
        font-size: 14px;
        margin-left: 10px;
    }
    input{
        margin-top: 30px;
    }
`
const Forgot = styled.div`
    width: 300px;
    display: flex;
    justify-content: flex-end;
    p{
        color: #0030AD;
        margin-top: 13px;
        font-size: 14px;
        cursor: pointer;
    }
`
const Icon = styled.div`
    color: #0030AD;
    font-size: 20px;
`
const Inputhold2 = styled.div`
    display: flex;
    width: 300px;
    height: 40px;
    border: 1px solid #0030AD;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 20px;
    align-items: center;
    padding-left: 10px;
    overflow: hidden;
    input{
        flex: 1;
        margin-left: 10px;
        height: 100%;
        border: none;
        outline: none;
    }
`
const Inputhold = styled.div`
    display: flex;
    width: 300px;
    height: 40px;
    border: 1px solid #0030AD;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 40px;
    align-items: center;
    padding-left: 10px;
    overflow: hidden;
    input{
        flex: 1;
        margin-left: 10px;
        height: 100%;
        border: none;
        outline: none;
    }
`
const Box = styled.form`
    width: 400px;
    background-color: #0031ad14;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    h2{
        font-weight: 400;
        font-size: 28px;
    }
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    background-color: #fff;
    padding-top: 95px;
    padding-bottom: 95px;
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Circle = styled.div`
    display: flex;
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: #0031ade4;
    top: 15px;
    border-radius: 100px;
    right: -33px;
    justify-content: center;
    align-items: center;
    img{
        width: 93%;
        height: 93%;
    }
`
const Imageholder = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
const Card = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #0031ade4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    img{
        height: 380px;
    }
`
const Left = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    padding-top: 308px;
    padding-bottom: 309px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`