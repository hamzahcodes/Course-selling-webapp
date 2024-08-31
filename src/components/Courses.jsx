import { Alert, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

function Courses() {
    const [ courses, setCourses ] = React.useState([])
    const [ loading, setLoading ] = React.useState(true);
    const [ alert, setAlert ] = React.useState(false);

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
            setAlert(true);
            setCourses(courses.filter((course) => course._id !== courseId))
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setTimeout(() => {
                setAlert(false)
            }, 3000);
        });
    };

    const handleUpdate = (courseId) => {

    }
    
  return (
    <div style={{ padding: "5vh", display: "flex", justifyContent: "center", gap: "2vh", flexWrap: "wrap" }}>
        {courses.map((course) => (
            <Card key={course._id} variant='outline' style={{ width: "30vw", minWidth: "250px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {course.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {course.published ? "Published" : "Unpublished" }
                    </Typography>
                    <Typography variant="body2">
                        {course.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Price: {course.price}</Button>
                </CardActions>
                <div style={{ display: "flex", justifyContent: "end", alignItems: "center"}}>
                    <CardActions>
                        <Button size="small" variant='contained' color='success' onClick={() => handleUpdate(course._id)}>Update</Button>
                    </CardActions>
                    <CardActions>
                        <Button size="small" variant='contained' color='error' onClick={() => handleDelete(course._id)}>Delete</Button>
                    </CardActions>
                </div>
                
            </Card>
        ))}

        {alert && 
            <div style={{ position: 'absolute', top: "5vh"}}>
                <Alert severity="success">Deleted successfully</Alert>
            </div>
        }

    </div>
  )
}

export default Courses