import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import components
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import VaccineInfo from "./pages/VaccineInfo";
import VaccineRegistration from "./pages/VaccineRegistration";
import Loading from "./components/Loading";
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  // const navigate = useNavigate();

  const checkAuthenticated = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
      };

      const res = await axios.get(
        "https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/auth/is_verify",
        config
      );

      const response = res.data;

      if (response.message === "Token is valid") {
        setisAuthenticated(true);
      }
    } catch (err) {
      // console.log(err.message);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkAuthenticated();
    }
  }, []);

  if (localStorage.token && !isAuthenticated) {
    // Render loading state or redirect to a loading page
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              !isAuthenticated ? (
                <LandingPage />
              ) : (
                <Navigate to="/welcome" replace />
              )
            }
          ></Route>

          <Route
            exact
            path="/signup"
            element={
              !isAuthenticated ? <SignUp /> : <Navigate to="/welcome" replace />
            }
          ></Route>

          <Route
            exact
            path="/signin"
            element={
              !isAuthenticated ? <Login /> : <Navigate to="/welcome" replace />
            }
          ></Route>

          <Route
            exact
            path="/welcome"
            element={
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          ></Route>

          <Route
            exact
            path="/vaccines/:nid"
            element={
              isAuthenticated ? (
                <VaccineInfo />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          ></Route>

          <Route
            exact
            path="/vaccine-registration"
            element={
              isAuthenticated ? (
                <VaccineRegistration />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
