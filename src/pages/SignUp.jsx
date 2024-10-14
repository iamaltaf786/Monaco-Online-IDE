import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import image from "../images/authPageSide.png"

function SignUp() {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  const submitForm = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between px-[100px]">
        <div className="left w-[35%]">
            <img 
            className='w-[200px]' 
            src={logo} 
            alt="" 
            />
            <form 
            onSubmit={submitForm}
            className='w-full mt-[60px]' 
            action=""
            >
              <div className="inputBox">
                <input 
                required 
                onChange={(e)=>{setUsername(e.target.value)}} 
                value={username} type="text" 
                placeholder='Username' 
                />
              </div>

              <div className="inputBox">
                <input 
                required 
                onChange={(e)=>{setName(e.target.value)}} 
                value={name} 
                type="text" 
                placeholder='Name' 
                />
              </div>

              <div className="inputBox">
                <input 
                required 
                onChange={(e)=>{setEmail(e.target.value)}} 
                value={email} 
                type="email" 
                placeholder='Email' 
                />
              </div>

              <div className="inputBox">
                <input 
                required 
                onChange={(e)=>{setPwd(e.target.value)}} 
                value={pwd} 
                type="password" 
                placeholder='Password' 
                />
              </div>

              <p className='text-[gray]'>Already have an account <Link to="/login" className='text-[#00AEEF]'>login</Link></p>

              <button className="btnBlue w-full mt-[20px]">Sign Up</button>
            </form>
            {/* https://www.youtube.com/watch?v=VTRv_f_SmH8&list=PL8RMefbOoLenmPWQv3vtxz73nrlmN4uwD&index=1&t=508s */}
        </div>
        <div className="right w-[55%]">
          <img className='h-[100vh] w-[100%] object-cover' src={image} alt="" />
          {/* 22:43 */}
        </div>
      </div>
    </>
  )
}

export default SignUp
