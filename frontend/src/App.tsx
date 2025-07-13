

import {Route, Routes } from "react-router-dom";
// import { axiosInstance } from "./lib/axios";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import HomePage from "./pages/home/HomePage";

function App() {
  // axiosInstance
  
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
     </Routes>
    </>
  )
}

export default App
