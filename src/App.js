import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
