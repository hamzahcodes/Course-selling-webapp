import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext';
import Grid from '@mui/material/Grid';

function Appbar() {
  const { user, logout } = useAuth();

  return (
    <Grid container spacing={2} padding={1} style={{ backgroundColor: "#bfbcb4"}}>
      <Grid item xs={2} sm={4}>
        <Box>
          <Link to={'/'} style={{ textDecoration: "none", color: "#000"}} >
            <Button variant="outlined">Coursify</Button>
          </Link>
        </Box>
      </Grid>

      {
        user?.length !== 0
        ?
          <>
          <Grid item xs={12} sm={4} >
            <Box display="flex" justifyContent="center" gap="1vw">
              <Link to={'/createCourse'}>
                <Button variant='contained'>Create</Button>
              </Link>
              <Link to={'/courses'}>
                <Button variant='contained'>Courses</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={10} sm={4} >
            <Box display="flex" justifyContent="flex-end" gap="1vw">
              <Link to={'/'} style={{ textDecoration: "none", color: "#000"}} >
                <Button variant="outlined">{user}</Button>
              </Link>
              <Link to={'/'}>
                <Button variant='contained' 
                  onClick={() => { 
                    localStorage.setItem("token", null)
                    logout()
                  }}
                >Log out</Button>
            </Link>
            </Box>
          </Grid>
          
        </>
        :
          <Grid item sm={8} xs={10}>
            <Box display="flex" justifyContent="flex-end">
              <Link to={'/signup'}>
                <Button variant='contained' style={{ marginRight: "1vw"}}>Sign up</Button>
              </Link>
              <Link to={'/login'}>
                <Button variant='contained'>Login</Button>
              </Link>
            </Box>
          </Grid>
      }
     

    </Grid>
  )
}

export default Appbar