import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../components/controls/button';
const AccountPage = () => {
  return (
    <form action="http://localhost:3000/api/signUp" method="post">
      <label>
        Name:
        <input type="text" id="mail" name="mail" placeholder="Your mail here" />
      </label>
      <label>
        Password:
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*********"
        />
      </label>
      <label>
        Confirm password:
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="*********"
        />
      </label>

      <Button>Submit</Button>
    </form>
  );
};
export default AccountPage;
