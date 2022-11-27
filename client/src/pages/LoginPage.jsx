import React from 'react';
import Button from '../components/controls/button';
import Textbox from '../components/controls/textbox';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <div id='bodyBackground' style={{ backgroundImage: 'url(/src/assets/green-pattern.jpg)' }}></div>
      <div className='mx-auto backdrop-blur-sm w-96 m-6 p-4 bg-white-alpha-80 rounded-lg shadow-lg shadow-black-alpha-50 flex flex-col gap-y-4'>
        <h1 className='text-2xl text-center'>Login</h1>
        <form
          id='loginForm'
          action='http://localhost:3000/api/login'
          method='POST'
          className='flrequiredex flex-col gap-y-2'
        >
          <div>
            <label>
              Email:
              <Textbox
                type='email'
                required
                id='mail'
                name='mail'
                className='block w-full'
                placeholder='youremail@example.com'
              />
            </label>
          </div>

          <label>
            Password:
            <Textbox
              type='password'
              required
              id='password'
              name='password'
              className='block w-full'
            />
          </label>
        </form>
        <div className='flex justify-center gap-2'>
          <Button color='green' onClick={() => { document.getElementById('loginForm').submit() }}>Submit</Button>
          <Link to='/account/signup' className='btn'>Sign up</Link>
        </div>
      </div>
    </>
  )
}