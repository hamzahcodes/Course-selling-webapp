import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'

function App() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "#eeeeee", display: "flex", flexDirection: "column", flex: "1" }}>
      <header>
        <Appbar />
      </header>
      <main style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: '2rem' }}>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
