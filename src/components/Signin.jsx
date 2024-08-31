import React from "react";
import Card from "@mui/material/Card";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Signin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ error, setError ] = React.useState(false);

  const navigate = useNavigate();
  const { login } = useAuth()
  function handleSignin(e) {

    e.preventDefault()
    fetch(
      "http://localhost:3000/admin/login",
      {
        method: "POST",
        body: JSON.stringify({
          username: email, password
        }),
        headers: {
          "Content-type": "application/json",
        }
      },
    )
      .then(function (response) {
        if(!response.ok) {
          setError('Invalid username or password!');
          return;
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        localStorage.setItem("token", data.token);
        login()
        navigate('/createCourse')
      })
      .catch(function (error) {
        console.log(error.message);
      })
  }
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80%",
      }}
      onSubmit={handleSignin}
    >
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginBottom: "2vh" }}
      >
        Welcome back, Signin below
      </Typography>
      <Card
        variant="outlined"
        style={{
          width: "30vw",
          padding: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "3vh",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: "80%" }}
          onClick={() => setError('')}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ width: "80%" }}
          onClick={() => setError('')}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ margin: "auto" }}
          onClick={handleSignin}
        >
          Signin
        </Button>
        {error && <Typography variant="body2" style={{ color:"red" }}>
            {error}
          </Typography>}
      </Card>
    </form>
  );
}

export default Signin;
