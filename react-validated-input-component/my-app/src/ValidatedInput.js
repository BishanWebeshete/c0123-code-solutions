import { useState } from 'react';
export default function ValidatedInput() {
  const [passwordLength, setPasswordLength] = useState(0);
  const [password, setPassWord] = useState('');
  function handleChange(e) {
    setPasswordLength(e.target.value.length);
    setPassWord(e.target.value);
  }
  const upperCase = /[A-Z]/g;
  const digit = /[0-9]/g;
  const specialChar = /[!@#$%^&*()]+/;
  let color = 'red';
  let specialColor = 'red';
  let text = 'A password is required';
  let specialText = '';
  if (!upperCase.test(password) || !digit.test(password) || !specialChar.test(password)) {
    specialText = 'You are missing either a capital letter, special character, or number';
  }
  if (passwordLength > 0 && passwordLength < 8 ) {
    text = 'Your password is too short';
  } if (passwordLength >=8 ) {
    text = 'Your password meets the length requirements';
    color = 'green';
  }
  return (
    <>
      <label>
        Password: <input onChange={handleChange}></input>
      </label>
      <h4 style={{ backgroundColor: color }}>{text}</h4>
      <h4 style={{ backgroundColor: specialColor }}>{specialText}</h4>
    </>
  )
}
