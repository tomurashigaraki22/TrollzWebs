import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import jwt_decode from 'jwt-decode'
import { BASE_TEST, LOGIN_TEST } from '../../config'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [wrongEmailType, setwrongEmailtype] = useState(false);
  const [whiteEmailOrPass, setwhiteEmailOrPass] = useState(false);
  const [unknownError, setUnknownErr] = useState(false);
  const [Incorrectpass, setincorrectpass] = useState(false)
  const navigate = useNavigate();
  const [loggingin, setloggingin] = useState(false)

  const login = async () => {
    try {
      setwrongEmailtype(false);
      setwhiteEmailOrPass(false);
      setUnknownErr(false);
      setincorrectpass(false);
      setloggingin(true);

      // Validate email and password
      if (!email.endsWith('@gmail.com')) {
          setwrongEmailtype(true);
          setloggingin(false);
          return;
      }
  
      if (email === '' || password === '') {
          setwhiteEmailOrPass(true);
          setloggingin(false);
          return;
      }

      const formdata = new FormData();
      formdata.append('email', email)
      formdata.append('password', password)
      const response = await fetch(`${BASE_TEST}/login`, {
        method: 'POST',
        body: formdata
      })
      const resp2 = await response.json()
      if (resp2.status === 200){
        console.log('Success')
        localStorage.setItem('token', resp2.token)
        navigate('/')
      }
      else if (resp2.status === 404){
        console.log('Incorrect Password')
        setincorrectpass(true)
      }
      else if (resp2.status === 509){
        console.log('Error somewhere')
        setUnknownErr(true)
      }
    } catch (error) {
      console.error(error)
      setUnknownErr(true);
    } finally {
      setloggingin(false);
    }
  }

  return (
    <div className='bg-gradient-to-r from-[#fde7d9] to-[#fee5d7] w-[100vw] h-[100vh] flex'>
      {/* login */}
      <div className='w-[50vw] max-sm:w-[100vw] flex flex-col py-[50px] pl-10 max-sm:items-center max-sm:pl-0 gap-2'>
        <h1 className='text-2xl font-bold '>Login</h1>
        <p className='text-sm mt-3'>If you don't have an Account <Link to='/register' className='underline font-bold'>Sign up</Link></p>

        <label className='text-xs font-bold mt-7'>Email Address</label>
        {Incorrectpass && <p className="text-red-500">Incorrect Username Or Password</p>}
        {unknownError && <p className="text-red-500">Unknown Error Occurred</p>}
        <input value={email} onChange={(e) => setemail(e.target.value)} type='email' placeholder='Email Address....' className='border-[1px] w-[300px] h-[30px] rounded-[2px] pl-3'/>

        <label className='text-xs font-bold mt-2'>Password</label>
        <input value={password} onChange={(e) => setpassword(e.target.value)} type='password' placeholder='Password....' className='border-[1px] w-[300px] h-[30px] rounded-[2px] pl-3'/>

        <button onClick={login} disabled={loggingin} className='w-[300px] h-[30px] mt-5 rounded-sm drop-shadow-lg bg-gray-500 text-white py-3 flex items-center justify-center'>
          {loggingin ? <Dots color="#fff" /> : 'Login'}
        </button>

      </div>
      <div className='w-[50vw] bg-gray-200 max-sm:hidden'>
      </div>
    </div>
  )
}

export default Login;
