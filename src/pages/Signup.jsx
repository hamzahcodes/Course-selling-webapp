import React from "react";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [type, setType] = React.useState("user");
  const [error, setError] = React.useState(false);

  const handleType = (e) => {
    setType(e.target.value);
  }
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("in signup");
    console.log(username, " ", email, " ", password, " ", type)
  };

  return (
      <div>
        <AuthForm
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            type={type}
            handleType={handleType}
            handler={handleSignup}
            error={error}
            signup={"signup"}
        />
    </div>
  );
};

export default Signup;
