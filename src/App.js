import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop3 from "./pages/desktop3";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Desktop3 />
      <Footer />
    </>
  );
}
export default App;
