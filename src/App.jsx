import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import OnboardingPage from "./pages/OnboardingPage";
import PeoplePage from "./pages/PeoplePage";
import MakePage from "./pages/MakePage";
import MyPage from "./pages/MyPage";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage/>}/>
          <Route path="people" element={<PeoplePage/>}/>
          <Route path="make" element={<MakePage/>}/>
          <Route path="my" element={<MyPage/>}/>
        </Routes>
        <BottomNav/>
      </BrowserRouter>
    </>
  )
}

export default App;