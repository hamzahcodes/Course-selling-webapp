import {
    Button,
    Card,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    handler,
    error,
    type,
    setType,
    signup,
}) => {
    return (
        <Container
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                style={{
                    padding: "20px 40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "30px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {console.log(email, password, username, type)}
                    <Typography variant="h4">
                        {signup ? "Join us Today!" : "Welcome back!"}
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                        {signup
                            ? "Signup now to become a member"
                            : "Log in to access your account"}
                    </Typography>
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {signup && (
                        <TextField
                            fullWidth
                            id={error ? "outlined-basic" : "outlined-error"}
                            label="Username"
                            variant="outlined"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    )}
                    <TextField
                        fullWidth
                        id={error ? "outlined-basic" : "outlined-error"}
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        style={{ width: "100%" }}
                        id={error ? "outlined-basic" : "outlined-error"}
                        label="Password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue="user"
                                value={type}
                                label="Type"
                                onChange={(e) => setType(e.target.value)}
                            >
                                <MenuItem value={"user"}>User</MenuItem>
                                <MenuItem value={"admin"}>Admin</MenuItem>
                            </Select>
                        </FormControl>
                </div>
                <div>
                    <Button variant="contained" onClick={handler} type="submit">
                        {signup ? "Signup" : "Login"}
                    </Button>
                </div>
                {error && <Typography variant="body2" style={{ color:"red" }}>
                    {error}
                </Typography>}
                {signup ? (
                    <Typography>
                        Already a member?{" "}
                        <Link
                            to={"/login"}
                            style={{ textDecoration: "none", color: "#1976d2" }}
                        >
                            Login here
                        </Link>
                    </Typography>
                ) : (
                    <Typography>
                        Not a member?{" "}
                        <Link
                            to={"/signup"}
                            style={{ textDecoration: "none", color: "#1976d2" }}
                        >
                            Signup here
                        </Link>
                    </Typography>
                )}
            </Card>
        </Container>
    );
};

export default AuthForm;
