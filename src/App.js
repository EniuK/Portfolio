import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Me from "./components/link/me/me";
import Projects from "./components/link/projects/projects";
import Hobbys from "./components/link/hobbys/hobbys";
import Goals from "./components/link/goals/goals";
import Contacts from "./components/link/contacts/constacts";
import More from "./components/link/more/more";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Me" element={<Me />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Hobbys" element={<Hobbys />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/Contact" element={<Contacts />} />
      <Route path="/More" element={<More />} />
    </Routes>
  );
}

export default App;
