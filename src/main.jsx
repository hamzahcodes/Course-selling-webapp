import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Signup from './pages/Signup'
import App from './App'
import Home from './components/Home'
import AddCourse from './components/AddCourse'
import Courses from './components/Courses'
import { AuthProvider } from './AuthContext'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='createCourse' element={<AddCourse />} />
      <Route path='courses' element={<Courses />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
