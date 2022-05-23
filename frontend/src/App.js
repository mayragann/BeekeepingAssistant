// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddHivePage from "./pages/AddHive/AddHive";
import UpdateHivePage from "./pages/UpdateHivePage/UpdateHivePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addhive" element={<PrivateRoute><AddHivePage /></PrivateRoute>}/>
        <Route path="/hives/update/:id"  element={<PrivateRoute><UpdateHivePage /></PrivateRoute>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
