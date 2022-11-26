import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Button from '../components/controls/button';
import Textbox from '../components/controls/textbox';

export default function Login(){
    return(
        <div className='grid grid-cols-1 sm:grid-cols2'>
            buna coaie 
            <div>
            <form >
                <label>
                Email:
                    <Textbox
                    type="email"
                    required
                    id="mail"
                    name="mail"
                    placeholder="youremail@example.com"
                    />
                </label>

                <label>
                    Password:
                    <Textbox
                    type="password"
                    required
                    id="password"
                    name="password"
                    />
                </label>

                <label>
                    Confirm password:
                    <Textbox
                    type="password"
                    required
                    id="password2"
                    name="password2"
                    />
                </label>

                <Button>Submit</Button>
                <Button onclick="LFunction()"> Don't have an account? Sign up here! </Button>
                </form>
            </div>
        </div>
    )
}