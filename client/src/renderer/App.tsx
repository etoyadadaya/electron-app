import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Hello } from "../pages/hello";
import {
  Vault,
  Books,
  Films,
  Goals,
  Graphs,
  Ideas,
  Library,
  Music,
  Notes,
  Profile,
  Progress,
  User,
} from "../pages/profile";
import {
  Account,
  Billing,
  Connections,
  Earn,
  Language,
  Members,
  Notification,
  Security,
  Settings,
  Upgrade,
} from "../pages/settings";
import { useCheckAuth } from "../hooks/useCheckAuth/useCheckAuth";

export default function App() {
  useCheckAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="user" element={<User />} />
          <Route path="vault" element={<Vault />} />
          <Route path="books" element={<Books />} />
          <Route path="films" element={<Films />} />
          <Route path="goals" element={<Goals />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="library" element={<Library />} />
          <Route path="notes" element={<Notes />} />
          <Route path="progress" element={<Progress />} />
          <Route path="music" element={<Music />} />
        </Route>
        <Route path="/modal" element={<Settings />}>
          <Route path="account" element={<Account />} />
          <Route path="billing" element={<Billing />} />
          <Route path="connections" element={<Connections />} />
          <Route path="earn" element={<Earn />} />
          <Route path="language" element={<Language />} />
          <Route path="members" element={<Members />} />
          <Route path="notification" element={<Notification />} />
          <Route path="security" element={<Security />} />
          <Route path="settings" element={<Settings />} />
          <Route path="upgrade" element={<Upgrade />} />
        </Route>
      </Routes>
    </Router>
  );
}
