import React from "react";
import daycare from "../../assets/daycare.JPEG";
import playParkImg from "../../assets/playpark.jpg";
import Article from "../../components/Products/Article";
import Welcome from "./Welcome";
import triviaImg from "../../assets/trivia.jpeg";
export default function Main() {
  return (
    <>
      <Welcome />
      <Article
        title="Play Park"
        image={playParkImg}
        text="All humans ages 21+ and dogs of all ages welcomed to play park featuring
	  7,000 sq. ft. of outdoor space and local craft beers on tap."
        link="playPark"
        textBtn="Details"
      />
      <Article
        title="Day Care"
        image={daycare}
        text="Your pups are in good hands while you are away. Our staff supervises care for your dogs and are trained thoroughly in PET CPR and First Aid"
        textBtn="Details"
      />
      <Article title="Trivia" image={triviaImg} textBtn="Details" />
      <Article title="Food Truck" image={playParkImg} textBtn="Details" />
    </>
  );
}
