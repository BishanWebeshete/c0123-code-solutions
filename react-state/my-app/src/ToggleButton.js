import { useState } from 'react';
export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false)
  function handleClick(){
    setIsClicked(!isClicked);
    console.log(isClicked);
  }
    return (
      <button onClick={handleClick} style={!isClicked ? { backgroundColor: 'white' } : {backgroundColor: color}}>{text}</button>
    )
}
