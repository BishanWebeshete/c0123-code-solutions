import { useState } from 'react';
export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false)
  function handleClick(){
    setIsClicked(!isClicked);
    console.log(isClicked);
  }
  if (!isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: 'white' }}>{text}</button>
    )
  } return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>{text}</button>
  )
}
