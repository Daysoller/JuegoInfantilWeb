import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter basename="/JuegoInfantilWeb">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
