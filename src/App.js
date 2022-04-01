import './App.css';
import Home from "./components/Home";
import DataIn from "./components/DataIn";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route element={<Home />} path="/home" />
            <Route element={<DataIn />} path="/:data"/>
            <Route element={<DataIn />} path="/:data/:color/:bgCol" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
