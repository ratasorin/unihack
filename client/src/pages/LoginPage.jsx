import React from 'react';
import Button from '../components/controls/button';
import Textbox from '../components/controls/textbox';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='mx-auto w-96 m-6 p-4 rounded-lg shadow-lg flex flex-col gap-y-4'>
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
        <Button color='green' onClick={() => {document.getElementById('loginForm').submit()}}>Submit</Button>
        <Link to='/account/signup'><Button>Sign up</Button></Link>
      </div>
    </div>
  )
}