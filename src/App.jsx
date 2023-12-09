import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Notifications from './pages/Notifications'
import NoMatch from './pages/NoMatch'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="*" element={<NoMatch />} /> {/* Catch-all route should be at the end */}
      </Routes>
    </>
  )
}

export default App
