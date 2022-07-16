import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Newsletter from "./Components/Newsletter/Newsletter";

import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import Playpark from "./Components/Playpark/Playpark";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/playpark" element={<Playpark />} />
      </Routes>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
