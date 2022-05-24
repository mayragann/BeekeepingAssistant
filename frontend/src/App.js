// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddHivePage from "./pages/AddHive/AddHive";
import UpdateHivePage from "./pages/UpdateHivePage/UpdateHivePage";
// import InspectionPage from "./pages/InspectionPage/InspectionPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";


function App() {

  const [selectedHive, setSelectedHive] = useState('')
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage setSelectedHive={setSelectedHive} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addhive" element={<PrivateRoute><AddHivePage /></PrivateRoute>}/>
        <Route path="/hives/update/:id"  element={<PrivateRoute><UpdateHivePage selectedHive={selectedHive} /></PrivateRoute>}/>
        {/* <Route path="/inspections/all/:id"  element={<PrivateRoute><InspectionPage selectedHive={selectedHive}  /></PrivateRoute>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
