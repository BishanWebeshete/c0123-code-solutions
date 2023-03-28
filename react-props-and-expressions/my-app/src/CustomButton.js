export default function CustomButton(props) {
  return (
    <>
      <button style= {{backgroundColor: props.color}} >{props.text}</button>
    </>
  )
}
