// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {KEY} from './localKey';
import { useEffect } from "react";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddHivePage from "./pages/AddHive/AddHive";
import UpdateHivePage from "./pages/UpdateHivePage/UpdateHivePage";
import InspectionPage from "./pages/InspectionPage/InspectionPage";
import UpdateInspectionPage from "./pages/UpdateInspectionPage/UpdateInspectionPage";
import AddInspectionPage from "./pages/AddInspection/AddInspection";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";

function App() {
  const [selectedHive, setSelectedHive] = useState("");
  const [selectedInspection, setSelectedInspection] = useState("");
  const [searchResults, setSearchResults]= useState([]);
  const [currentVideo, setCurrentVideo] = useState({});



    useEffect(() => {
      getSearchResults()
      }, [])
  

  async function getSearchResults(searchTerm = 'soccer'){
  
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=4`);
    console.log(response.data.items)
    setSearchResults(response.data.items)
    setCurrentVideo(response.data.items[0])
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage
                setSelectedHive={setSelectedHive}
                setSelectedInspection={setSelectedInspection}
              />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/addhive"
          element={
            <PrivateRoute>
              <AddHivePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/hives/update/:id"
          element={
            <PrivateRoute>
              <UpdateHivePage selectedHive={selectedHive} />
            </PrivateRoute>
          }
        />
        <Route
          path="/inspections/all/:id"
          element={
            <PrivateRoute>
              <InspectionPage
                setSelectedHive={setSelectedHive}
                setSelectedInspection={setSelectedInspection}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/inspections/add/:id"
          element={
            <PrivateRoute>
              <AddInspectionPage
                selectedHive={selectedHive}
                selectedInspection={selectedInspection}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/inspections/:id"
          element={
            <PrivateRoute>
              <UpdateInspectionPage
                selectedHive={selectedHive}
                selectedInspection={selectedInspection}
              />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
