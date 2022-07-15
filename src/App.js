import "./App.css";
import daycare from "./assets/daycare.JPEG";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Newsletter from "./Components/Newsletter/Newsletter";
import playParkImg from "./assets/playpark.jpg";
import Products from "./Components/Products/Products";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Products
        title="Play Park"
        image={playParkImg}
        text="All humans ages 21+ and dogs of all ages welcomed to play park featuring
        7,000 sq. ft. of outdoor space and local craft beers on tap."
      />
      <Products
        title="Day Care"
        image={daycare}
        text="Your pups are in good hands while you are away. Our staff supervises care for your dogs and are trained thoroughly in PET CPR and First Aid"
      />
      <Products title="Trivia" image={playParkImg} />
      <Products title="Food Truck" image={playParkImg} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
