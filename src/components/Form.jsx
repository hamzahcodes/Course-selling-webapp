import { Button, Card, Checkbox, Snackbar, TextField, Typography } from '@mui/material'
import React from 'react'

function Form({ }) {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [ published, setPublished ] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = React.useState('');

    function handleCreateCourse() {
        fetch(
          "http://localhost:3000/admin/courses",
          {
            method: "POST",
            body: JSON.stringify({
              title, description, price, published
            }),
            headers: {
              "Content-type": "application/json",
              "authorization": "Bearer " + localStorage.getItem("token")
            }
          },
        )
          .then((response) => response.json())
          .then((data) => {
            setOpen(data.message)
            console.log(data)
            })
          .catch((err) => console.log(err))
          .finally(() => {
            setTitle("")
            setDescription("")
            setPrice(0)
            setPublished(false)
          })
    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80%",
      }}
    > 
        <Snackbar
            open={open?.length === 0 ? false : true}
            autoHideDuration={3000}
            onClose={() => setOpen('')}
            message={open}
            key={`topcenter`}
        />
     
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginBottom: "2vh" }}
      >
        Course Details
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
          label="Title"
          variant="outlined"
          style={{ width: "80%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          style={{ width: "80%" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          style={{ width: "80%" }}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Typography variant='subtitle2'>
          Publish
        </Typography>
        <Checkbox  {...label} 
            value={published}
            onChange={(e) => setPublished(!published)}
        />
        {console.log(published)}
        </div>
        <Button
          variant="contained"
          style={{ margin: "auto" }}
          onClick={handleCreateCourse}
        >
          Create Course
        </Button>
      </Card>
    </div>
  )
}

export default Form