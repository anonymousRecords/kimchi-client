import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnboardingPage from "./pages/OnboardingPage";
import PeoplePage from "./pages/PeoplePage";
import MakePage from "./pages/MakePage";
import MyPage from "./pages/MyPage";
// import DecoratePage from "./pages/DecoratePage";
import PreviewPage from "./pages/PreviewPage";
import BoastPage from "./pages/BoastPage";
import SearchPage from "./pages/SearchPage";
import FramePage from "./pages/FramePage";
import PhotoPage from "./pages/PhotoPage";
import BoastComepletePage from "./pages/BoastCompeletePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage/>}/>
          <Route path="people" element={<PeoplePage/>}/>
          <Route path="make" element={<MakePage/>}/>
          <Route path="my" element={<MyPage/>}/>
          {/* <Route path="decorate" element={<DecoratePage/>}/> */}
          <Route path="frame" element={<FramePage/>}/>
          <Route path="photo" element={<PhotoPage/>}/>
          <Route path="preview" element={<PreviewPage/>}/>
          <Route path="boast" element={<BoastPage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path="compelete" element={<BoastComepletePage/>}/>
          {/* <Route path="prc" element={<Practice/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;