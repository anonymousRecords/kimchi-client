import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SeoulPage from "./pages/Region/SeoulPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="seoul" element={<SeoulPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;