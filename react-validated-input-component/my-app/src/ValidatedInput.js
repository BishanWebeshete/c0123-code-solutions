import { useState } from 'react';
export default function ValidatedInput() {
  const [passwordLength, setPasswordLength] = useState(0);
  function handleChange(e) {
    setPasswordLength(e.target.value.length);
  }
  let color = 'red';
  let text = 'A password is required';
  if (passwordLength > 0 && passwordLength < 8 ) {
    text = 'Your password is too short';
  } if (passwordLength >=8 ) {
    text = 'Your password meets the requirements';
    color = 'green';
  }
  return (
    <>
      <label>
        Password: <input onInput={handleChange}></input>
      </label>
      <h4 style={{ backgroundColor: color }}>{text}</h4>
    </>
  )
}
