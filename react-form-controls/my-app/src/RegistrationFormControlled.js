import { useState } from 'react';
export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault()
    console.log({userName, password});
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username: <input onChange={e => setUserName(e.target.value)} id="username" name="username" defaultValue="username"></input>
        </label>
        <label htmlFor="password">
          Password: <input onChange={e => setPassword(e.target.value)} id="password" name="password" defaultValue="password"></input>
        </label>
        <label>
          Submit: <input type="submit" value="submit"></input>
        </label>
      </form>
    </>
  )
}
