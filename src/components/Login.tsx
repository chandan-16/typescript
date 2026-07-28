import { Input } from "./Input"

export const Login = () => {
  return (
    <>
    <form className="max-w-sm mx-auto">
        <Input name="Name" type="text" />
        <Input name="Password" type="password" />
        <Input name="Confirm password" type="password" />
    </form>    
    </>
  )
}
