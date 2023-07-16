import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import SeoulPage from "./pages/Region/MainPage";
import OnboardingPage from "./pages/OnboardingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage/>}/>
          <Route path="seoul" element={<SeoulPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;