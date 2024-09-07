import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function Course({ course, handleDelete, handleUpdate }) {
  return (
    <Card variant='outline' style={{ width: "30vw", minWidth: "250px" }}>
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
  )
}

export default Course