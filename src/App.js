import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Events from "./pages/Events/Events";
import Playpark from "./pages/Playpark/Playpark";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import ParkRules from "./pages/ParkRules/ParkRules";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/playpark" element={<Playpark />} />
        <Route path="/parkrules" element={<ParkRules />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
