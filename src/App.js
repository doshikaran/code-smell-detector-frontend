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

// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import NavBar from "./components/NavBar";
// import RegisterPage from "./pages/RegisterPage";
// import LogInPage from "./pages/LogInPage";

// function App() {
//   const [isRegistered, setIsRegistered] = useState(null);
//   useEffect(() => {
//     const checkIfUserIsRegistered = async () => {
//       try {
//         // Replace 'someUsername' with the actual username you want to check
//         const response = await fetch("http://localhost:3000/user-exists/someUsername");
//         const data = await response.json();
//         setIsRegistered(data.exists);
//       } catch (error) {
//         console.error("Error checking user registration:", error);
//         setIsRegistered(false); // or handle error differently
//       }
//     };

//     checkIfUserIsRegistered();
//   }, []);

//   return (
//     <div className="h-screen w-screen bg-gradient-to-r from-[#e9defa] to-[#fbfcdb]">

//       <BrowserRouter>
//       <NavBar />

//         <Routes>
//         <Route path="/" element={<LogInPage/>} />
//           <Route path="/login" element={isRegistered === true ? <LogInPage /> : <Navigate to="/register" />} />
//           <Route path="/register" element={isRegistered === false ? <RegisterPage /> : <Navigate to="/login" />} />
//           <Route path="/home" element={<HomePage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import NavBar from "./components/NavBar";
// import RegisterPage from "./pages/RegisterPage";
// import LogInPage from "./pages/LogInPage";
// // Assuming you add UploadPage
// import UploadPage from "./pages/UploadPage";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkIfUserIsLoggedIn = async () => {
//       try {
//         // This is a placeholder for actual login check, adjust as necessary
//         const response = await fetch("http://localhost:3000//user-exists/:username");
//         const data = await response.json();
//         setIsLoggedIn(data.isLoggedIn);
//       } catch (error) {
//         console.error("Error checking user login status:", error);
//         setIsLoggedIn(false); // Or handle error differently
//       }
//     };

//     checkIfUserIsLoggedIn();
//   }, []);

//   return (
//     <div className="h-screen w-screen bg-gradient-to-r from-[#e9defa] to-[#fbfcdb]">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LogInPage />} />
//           <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LogInPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
//           <Route path="/upload" element={isLoggedIn ? <UploadPage /> : <Navigate to="/login" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
