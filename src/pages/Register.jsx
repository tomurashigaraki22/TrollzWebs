import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_TEST } from '../../config';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css'; // Import the CSS file for the loading spinner

const Register = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [wrongEmailType, setwrongEmailtype] = useState(false);
  const [whiteEmailOrPass, setwhiteEmailOrPass] = useState(false);
  const [unknownError, setUnknownErr] = useState(false);
  const [Incorrectpass, setincorrectpass] = useState(false);
  const navigate = useNavigate();
  const [loggingin, setloggingin] = useState(false);

  const signup = async () => {
    try {
      setwrongEmailtype(false);
      setwhiteEmailOrPass(false);
      setUnknownErr(false);
      setloggingin(true); // Set loading state

      // Validate email and password
      if (!email.endsWith('@gmail.com')) {
        setwrongEmailtype(true);
        setloggingin(false); // Reset loading state
        return;
      }

      if (email === '' || password === '') {
        setwhiteEmailOrPass(true);
        setloggingin(false); // Reset loading state
        return;
      }

      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);
      const response = await fetch(`${SIGNUP_TEST}`, {
        method: 'POST',
        body: formdata,
      });

      const resp2 = await response.json();
      if (resp2.status === 200) {
        console.log('Success');
        setloggingin(false); // Reset loading state
        localStorage.setItem('token', resp2.token);
        navigate('/');
      } else if (resp2.status === 404) {
        console.log('Incorrect Password');
        setincorrectpass(true);
      } else if (resp2.status === 509) {
        console.log('Error somewhere');
        setUnknownErr(true);
      }

      setloggingin(false); // Reset loading state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='w-[100vw] h-[100vh] flex'>
        {/* Register */}
        <div className='w-[50vw] max-sm:w-[100vw] flex flex-col py-[40px] pl-10 max-sm:items-center max-sm:pl-0 gap-2'>
          <h1 className='text-2xl font-bold '>Register</h1>
          <p className='text-sm mt-[2px]'>
            If you already have an account{' '}
            <Link to='/login' className='underline font-bold'>
              Login
            </Link>
          </p>

          <label className='text-xs font-bold mt-2'>Name</label>
          {whiteEmailOrPass && <p className='text-red-500'>All Fields are required</p>}
          {unknownError && <p className='text-red-500'>An unknown error Occurred... Try again</p>}
          {wrongEmailType && <p className='text-red-500'>Email must end in @gmail.com</p>}
          <input
            type='text'
            placeholder='Your Name....'
            className='border-[1px] w-[300px] h-[30px] rounded-[2px] pl-3'
          />

          <label className='text-xs font-bold mt-2'>Email Address</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type='email'
            placeholder='Email Address....'
            className='border-[1px] w-[300px] h-[30px] rounded-[2px] pl-3'
          />

          <label className='text-xs font-bold mt-2'>Create Password</label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type='password'
            placeholder='Password....'
            className='border-[1px] w-[300px] h-[30px] rounded-[2px] pl-3'
          />

          <button onClick={signup} className='w-[300px] h-[30px] mt-5 rounded-sm drop-shadow-lg bg-gray-500 text-white py-3 flex items-center justify-center'>
            {loggingin ? <Dots /> : 'Create Account'}
          </button>

        </div>
        <div className='w-[50vw] bg-gray-200 max-sm:hidden'></div>
      </div>
    </div>
  );
};

export default Register;
