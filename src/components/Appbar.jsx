import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext';

function Appbar() {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding:"4px"}}>
      <Link to={'/'} style={{ textDecoration: "none", color: "#000"}} >
        <Typography variant='h6'>
          Coursify    
        </Typography>
      </Link>
      {
        user
      ? 
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1vw" }}>
          <Typography variant='body1'>
            {user}   
          </Typography>
            <Link to={'/'}>
              <Button variant='contained' 
                onClick={() => { 
                  localStorage.setItem("token", null)
                  logout()
                }}
              >Log out</Button>
            </Link>
        </div>
      :
        <div>
          <Link to={'/signup'}>
            <Button variant='contained' style={{ marginRight: "1vw"}}>Sign up</Button>
          </Link>
          <Link to={'/signin'}>
            <Button variant='contained'>Sign in</Button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Appbar