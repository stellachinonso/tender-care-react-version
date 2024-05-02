import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import SignUp from './pages/auth/SignUp';
import VerifyEmail from './pages/auth/VerifyEmail';
import GenerateProfile from './pages/auth/GenerateProfile';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import NewPassword from './pages/auth/NewPassword';
import HomePage from './pages/home/HomePage';
import DevelopmentTracker from './pages/tracker/DevelopmentTracker';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth/signup" element={<SignUp />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/verify-email" element={<VerifyEmail />} />
        <Route exact path="/auth/generate-profile" element={<GenerateProfile />} />
        <Route exact path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/auth/reset-password" element={<ResetPassword />} />
        <Route exact path="/auth/new-password" element={<NewPassword />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/development-tracker" element={<DevelopmentTracker />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
