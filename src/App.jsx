import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginAndSignup/Login";
import Signup from "./Pages/LoginAndSignup/Signup";
import AuthComponent from "./Pages/LoginAndSignup/AuthComponent";
import LoginContent from "./Pages/LoginAndSignup/LoginContent";
import PersonalInfo from "./Pages/LoginAndSignup/signuppages/PersonalInfo";
import AddressInfo from "./Pages/LoginAndSignup/signuppages/AddressInfo";
import LastSteps from "./Pages/LoginAndSignup/signuppages/LastSteps";
import Welcome from "./Pages/Welcome/Welcome";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AppComponent from "./Pages/Appcomponent/AppComponent";
import TopNavMenu from "./components/TopNavigationMenu/TopNavMenu";
import BottomNavBar from "./components/BottomNavBar/bottomNavBar";
import Record from "./Pages/Records/Record";
import Track from "./Pages/Track WireFrame/Track";
import Notification from "./Pages/Notification/Notification";
import { useSelector } from "react-redux";
import {
  selectUserName,
  selectPhoneNumber,
  setDone,
} from "./features/profile/personalInfoSlice";
import DashboardSkeleton from "./Pages/Dashboard/DashBoardSkeleton";
import TrackSkeleton from "./Pages/Track WireFrame/TrackSkeleton";

function App() {
  let name = useSelector(selectUserName);
  let number = useSelector(selectPhoneNumber);
  let done = useSelector(setDone);

  console.log(`done: ${done}`);
  console.log(`name: ${name} and number: ${number}`);
  return (
    <WelcomeBar className="App">
      <Router>
        <TopNavMenu />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="app" element={<AppComponent />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="/track-skeleton" element={<TrackSkeleton />} /> */}
          <Route path="record" element={<Record />} />
          <Route path="track" element={<Track />} />
          <Route path="notification" element={<Notification />} />
          <Route path="auth" element={<AuthComponent />}>
            <Route index element={<Login />} />
            <Route path="login" element={<LoginContent />} />
            <Route path="signup" element={<Signup />}>
              <Route index element={<PersonalInfo />} />
              <Route path="address-information" element={<AddressInfo />} />
              <Route path="last-steps" element={<LastSteps />} />
            </Route>
          </Route>
        </Routes>
        <BottomNavBar />
      </Router>
    </WelcomeBar>
  );
}

export default App;

const WelcomeBar = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
