import {MemoryRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import {Hello} from "../pages/hello/hello";
import Profile from "../pages/profile/profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}
