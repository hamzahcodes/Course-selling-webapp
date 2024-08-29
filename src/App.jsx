import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee"}}>
      <Appbar />
      <Outlet />
    </div>
  )
}

export default App
