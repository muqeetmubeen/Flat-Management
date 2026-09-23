
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
      
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      
      const [response, setResponse] = useState(null);
      
      const handleLogin = async(e)=>{
        e.preventDefault();
         
        try {
          const res = await axios.post('http://localhost:4000/api/auth/login',{
            email,password
          },{
            headers:{
              "Content-Type":"application/json"
            }
          })
          
          const data = res.data;

          if(data.token){
            localStorage.setItem("token",data.token);
            localStorage.setItem("role",data.user.role);
           
            if (data.message === "Admin LoggedIn Successfully" && data.user.role === 'Admin') {
            setResponse(data.message)
            console.log(data.message);
            navigate('/admin-dash');
          } else {
            setResponse(data.message)
            navigate('/user-dash')
          }          
          
          }
    
          
    
        } catch (error) {
          console.log('Logged In Faild',error);
           
        }
      
      }
    
  return (
    <>
      
          <div className="login">
            <div className='flex flex-col justify-center items-center h-dvh'>
              <div className='border rounded-2xl p-4'>
                <form onSubmit={handleLogin}>
                  <h1 className='font-bold text-4xl mb-3'>Login Page</h1>
                  <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' className='border border-gray-400 rounded p-2' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Enter your password' className='border border-gray-400 rounded p-2' />
                  </div>
                 <button className='mt-3 border-2 w-full rounded-2xl' type='submit'>Submit</button>
    
                </form>
    
                 <div className='mt-2'>
                  <p>Not Registered ? <Link to="/">Go to Register</Link></p>
                 </div>
              </div>
            </div>
          </div>
        </>
      
    
    
    
  )
}

export default Login