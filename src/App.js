import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import ParkRules from "./pages/ParkRules/ParkRules";

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Playpark from "./pages/Playpark/Playpark";
import { Park } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/playpark" element={<Playpark />} />
        <Route path="/parkrules" element={<ParkRules />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
