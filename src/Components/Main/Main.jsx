import React from "react";
import daycare from "../../assets/daycare.JPEG";
import playParkImg from "../../assets/playpark.jpg";
import Products from "../Products/Products";
import Welcome from "../Welcome/Welcome";
import triviaImg from "../../assets/trivia.jpeg";
// import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Welcome />
      <Products
        title="Play Park"
        image={playParkImg}
        text="All humans ages 21+ and dogs of all ages welcomed to play park featuring
	  7,000 sq. ft. of outdoor space and local craft beers on tap."
        link="playPark"
        textBtn='Details'
      />
      <Products
        title="Day Care"
        image={daycare}
        text="Your pups are in good hands while you are away. Our staff supervises care for your dogs and are trained thoroughly in PET CPR and First Aid"
      />
      <Products title="Trivia" image={triviaImg} />
      <Products title="Food Truck" image={playParkImg} />
    </>
  );
}
