import React, { useState } from 'react'
import { Alert } from "@mui/material";
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [type, setType] = useState('user')
    const [ alert, setAlert ] = useState(false);
    const [ error, setError ] = useState(true);
    const { login } = useAuth()
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        if(!email || !password) {
            setError('All fields are required!')
            return
        }

        const url = `http://localhost:3000/${type}/login`
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            username: email, password
          }),
          headers: {
            "Content-type": "application/json"
          }
        })

        if(!response.ok) {
          setError('Invalid username or password!');
          return;
        } else {
          const data = await response.json()
          localStorage.setItem("token", data.token);
          login(email)
          console.log("in login success");
          navigate('/courses', { replace: true })
        }
    }

  return (
    <div>
        <AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handler={handleLogin} error={error} type={type} setType={setType}/>
    </div>
  )
}

export default Login