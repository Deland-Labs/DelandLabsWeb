import React,{useEffect} from "react";
import "./assets/styles/App.scss";
import { Routes, Route,useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Press } from "./pages/Press";
export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
      window.scrollTo(0, 0)
    }
  }, [navigate])
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="presskit" element={<Press />} />
    </Routes>
  );
}