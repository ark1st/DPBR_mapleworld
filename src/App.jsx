import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
// import Main1 from "./pages/Main1";
import Contents from "./pages/Contents";
// import MainBR from "./pages/MainBR";
// import MainDP from "./pages/MainDP";
// import SideBar from "./pages/SideBar";
import DPBRProfile from "./pages/DPBRProfile";
// import DPBRProfile1 from "./pages/DPBRProfile1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contents":
        title = "";
        metaDescription = "";
        break;
      case "/mainbr":
        title = "";
        metaDescription = "";
        break;
      case "/maindp":
        title = "";
        metaDescription = "";
        break;
      case "/sidebar":
        title = "";
        metaDescription = "";
        break;
      case "/dpbr-profile":
        title = "";
        metaDescription = "";
        break;
      case "/dpbr-profile1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/" element={<Main1 />} /> */}
      <Route path="/contents" element={<Contents />} />
      {/* <Route path="/mainbr" element={<MainBR />} />
      <Route path="/maindp" element={<MainDP />} /> */}
      {/* <Route path="/sidebar" element={<SideBar />} /> */}
      <Route path="/dpbr-profile" element={<DPBRProfile />} />
      {/* <Route path="/dpbr-profile1" element={<DPBRProfile1 />} /> */}
    </Routes>
  );
}
export default App;
