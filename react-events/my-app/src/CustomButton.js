export default function Button({text, color, onCustomClick}) {
  // function handleClick(text) {
  //   window.alert(`You Clicked ${text}`);
  // }
  return (
    <button onClick={() => onCustomClick(text)} style={{backgroundColor: color}}>{text}</button>
  )
}
