import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Button from '../components/controls/button';
const AccountPage = () => {
    return (

        <form>
            <label>
                Name: 
                <input
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Your Name here"
                />
            </label>

            <label>
                Password: 
                <input
                 type="text"
                 id="password"
                 name="password"
                 placeholder="*********"
                />
            </label>

            <label>
                Confirm password: 
                <input
                 type="text"
                 id="password2"
                 name="password2"
                 placeholder="*********"
                />
            </label>

            <Button>Submit</Button>
        </form>
        
    )

  };
export default AccountPage;
