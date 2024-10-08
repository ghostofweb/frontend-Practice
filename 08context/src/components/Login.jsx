import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

const {setUser} = useContext(UserContext);

    const handleSubmit  = (e) =>{
        e.preventDefault();
        setUser({username,password})
        user
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder='username' id="" />
        <input type="text" 
        value={password}
        onChange={(e) =>{
            setPassword(e.target.value)
        }}
        placeholder='password' id="" />
        <button onClick={handleSubmit}></button>
    </div>
  )
}

export default Login