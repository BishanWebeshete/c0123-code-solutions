import { useState } from 'react';
export default function HotButton({color}) {
  const [timesClicked, setTimesClicked] = useState(0)
  function handleClick() {
    setTimesClicked(timesClicked + 1);
  }
  let textColor = timesClicked < 12 ? "white" : "black";
  let bckColor = "black";
  if (timesClicked < 3) {
    bckColor = 'rgb(53,28,117)'
  } else if (timesClicked < 6) {
    bckColor = 'rgb(103,78,167)'
  } else if (timesClicked < 9) {
    bckColor = 'rgb(224,102,102)'
  } else if (timesClicked < 12) {
    bckColor = 'rgb(246,178,106)'
  } else if (timesClicked < 15) {
    bckColor = 'rgb(255,255,0)'
  } else if (timesClicked < 18) {
    bckColor = 'rgb(255,255,255)'
  }
    return (
      <button onClick={handleClick} style={{ backgroundColor: bckColor, color: textColor}}>Hot Button</button>
    )
}
