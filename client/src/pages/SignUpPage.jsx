import React from 'react';
import Button from '../components/controls/button';
import Textbox from '../components/controls/textbox';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (<>
    <div id='bodyBackground' style={{ backgroundImage: 'url(/src/assets/green-pattern.jpg)' }}></div>
      <h1 className='text-2xl text-center'>Sign Up</h1>
      <form 
        id='loginForm' 
        action='http://localhost:3000/api/signUp' 
        method='POST'
        className='flex flex-col gap-y-2'
      >
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
        <label>
            Confirm Password:
            <Textbox
                type='password'
                required
                id='password2'
                name='password2'
                className='block w-full'
            />
        </label>
      </form>
      <div className='flex justify-center gap-2'>
        <Button color='green' onClick={() => { document.getElementById('signupForm').submit() }}>Submit</Button>
        <Link to='/account/login'><Button>Login</Button></Link>
      </div>
    </div>
  </>
  )
}