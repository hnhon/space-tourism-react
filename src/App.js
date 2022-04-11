import "./style/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/des" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
