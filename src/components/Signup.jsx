import React from 'react'
import Card from '@mui/material/Card';
import { Button, TextField, Typography } from '@mui/material';

function Signup() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "80%" }}>
        <Typography variant='h6' style={{ textAlign: "center", marginBottom: "2vh" }}>
            Welcome to Coursify. Signup below
        </Typography>
        <Card variant="outlined" style={{ width: "30vw", padding:"5vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "3vh" }}>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "80%" }}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: "80%" }} />
            <Button variant="contained" style={{ margin: "auto" }}>Signup</Button>
        </Card>
    </div>
  )
}

export default Signup