import { useState } from 'react';
export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault()
    console.log({userName, password});
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input onChange={e => setUserName(e.target.value)} name="username" value={userName}></input>
      </label>
      <label>
        Password: <input onChange={e => setPassword(e.target.value)} name="password" value={password}></input>
      </label>
      <label>
        Submit: <input type="submit" value="submit"></input>
      </label>
     </form>
  )
}
