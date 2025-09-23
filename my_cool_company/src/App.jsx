import './App.css'
import LeadPage from "./pages/Leadpage.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LeadPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
