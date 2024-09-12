import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import InstallPage from './pages/InstallPage'
import PostgresDockerPage from './pages/PostgresDockerPage'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/postgres-docker" element={<PostgresDockerPage />} />
      </Routes>
    </div>
  )
}

export default App