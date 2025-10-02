import LeadPage from "./pages/Leadpage.jsx";
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import styles from "./App.module.scss";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<LeadPage/>} />
          </Routes>
      </HashRouter>
  )
}

export default App
