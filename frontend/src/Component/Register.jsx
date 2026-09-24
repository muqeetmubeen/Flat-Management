import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  
  const [response, setResponse] = useState(null);
  
  const handleRegister = async(e)=>{
    e.preventDefault();
     
    try {
      const res = await axios.post('https://flat-managementbackend.vercel.app/api/auth/register',{
        name,email,password,phoneNo,address,pincode
      },{
        headers:{
          "Content-Type":"application/json"
        }
      })
      
      const data = res.data;

      if (data.message === "User Registered Successfully") {
        setResponse(data.message)
        console.log(data.message);
        navigate('/login');
      } else if(data.message === "User already exists"){
        setResponse(data.message)
      }

    } catch (error) {
      console.log('Registration Faild',error);
       
    }
  
  }

  return (
    <>
      <div className="register">
        <div className='flex flex-col justify-center items-center h-dvh'>
          <div className='border rounded-2xl p-4'>
            <form onSubmit={handleRegister}>
              <h1 className='font-bold text-4xl mb-3'>Register Page</h1>
              <div className='flex flex-col'>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" placeholder='Enter your name' className='border border-gray-400 rounded p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' className='border border-gray-400 rounded p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Enter your password' className='border border-gray-400 rounded p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="PhoneNo">PhoneNo</label>
                <input value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} type="text" name="PhoneNo" id="PhoneNo" placeholder='Enter your PhoneNo' className='border border-gray-400 rounded p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="address">Address</label>
                <textarea value={address} onChange={(e)=>setAddress(e.target.value)} type="text" name="address" id="address" placeholder='Enter your address' className='border border-gray-400 rounded p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="pincode">Pincode</label>
                <input value={pincode} onChange={(e)=>setPincode(e.target.value)} type="text" name="pincode" id="pincode" placeholder='Enter your pincode' className='border border-gray-400 rounded p-2' />
              </div>
             <button className='mt-3 border-2 w-full rounded-2xl' type='submit'>Submit</button>

            </form>

             <div className='mt-2'>
              <p>Already Registered ? <Link to="/login">Go to Login</Link></p>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register