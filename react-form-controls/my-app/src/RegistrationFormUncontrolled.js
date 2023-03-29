
export default function RegistrationFormUncontrolled() {
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target
  const formData = new FormData(form)
  const formJson = Object.fromEntries(formData.entries())
  console.log(formJson)
  }
  return (
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input id="username" name="username"></input>
        </label>
        <label>
          Password: <input id="password" name="password"></input>
        </label>
        <label>
          Submit: <input type="submit" value="submit"></input>
        </label>
      </form>
  )
}
