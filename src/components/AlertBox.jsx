import { Snackbar, Alert } from '@mui/material'
import React from 'react'

function AlertBox({ message, open, handleClose }) {

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default AlertBox