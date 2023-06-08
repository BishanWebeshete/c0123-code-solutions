export default function CustomButton(props) {
  return (
    <>
      <button style= {{backgroundColor: props.color}} >{props.text}</button>
    </>
  )
}


// or
// export default function CustomButton({text, color}) {
//   return (
//     <button style={{backgroundColor: color}}>{text}</button>
//   )
// }
