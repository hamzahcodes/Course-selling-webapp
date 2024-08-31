import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee", display: "flex", flexDirection: "column", flex: "1" }}>
      <header>
        <Appbar />
      </header>
      <main style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
