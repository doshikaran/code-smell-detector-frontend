import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import UploadPage from "./pages/UploadPage";


function App() {
  return (
    <div className="h-full w-screen bg-gradient-to-r from-[#e9defa] to-[#fbfcdb]">
      {/* <NavBar /> */}

      <BrowserRouter>
      <NavBar />

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LogInPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
