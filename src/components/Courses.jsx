import { Alert, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Course from './Course';
import AlertBox from './AlertBox';

function Courses() {
    const [ courses, setCourses ] = React.useState([])
    const [ loading, setLoading ] = React.useState(true);
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };

    React.useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/admin/courses', {
            method: "GET",
            headers: {
                'authorization': "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.courses);
            setCourses(data.courses)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);

    function handleDelete(courseId) {
        fetch(`http://localhost:3000/admin/courses/${courseId}`, {
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(() => {
            setOpen(true);
            setCourses(courses.filter((course) => course._id !== courseId))
        })
        .catch((err) => console.log(err))
        // .finally(() => {
        //     setTimeout(() => {
        //         setAlert(false)
        //     }, 3000);
        // });
    };

    const handleUpdate = (courseId) => {

    }
    
  return (
    
    <Grid container spacing={2}>
        <AlertBox open={open} handleClose={handleClose} message={`Course Deleted successfully`}/>
        <Typography variant='h5'>Published Courses</Typography>
        <Grid container spacing={2}>
        {courses.filter(course => course.published).map((course) => (
            <Grid item key={course._id}>
                <Course course={course} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            </Grid>
        ))}
        </Grid>

        <Typography variant='h5'>Unpublished Courses</Typography>
        <Grid container spacing={2}>
        {courses.filter(course => !course.published).map((course) => (
            <Grid item key={course._id}>
                <Course course={course} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            </Grid>
        ))}
        </Grid>
    </Grid>
  )
}

export default Courses