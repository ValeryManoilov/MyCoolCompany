import LeadPage from "./pages/Leadpage.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styles from "./App.module.scss";

function App() {
  return (
      <BrowserRouter basename="/my_cool_company">
          <Routes>
              <Route path="/" element={<LeadPage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
