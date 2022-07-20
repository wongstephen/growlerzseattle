import React from "react";
import daycareImg from "../../assets/daycare2.JPEG";
import playParkImg from "../../assets/playpark.jpg";
import Article from "../../components/Article/Article";
import Welcome from "./Welcome";
import taproomImg from "../../assets/taproom.jpg";
import foodtruckImg from "../../assets/foodtruck.jpg";
import dogWashImg from "../../assets/benjamin-lehman-k8xJOnA3zYM-unsplash.jpg";

export default function Main() {
  const data = [
    {
      title: "Play Park",
      image: playParkImg,

      text: `All humans ages 21+ and dogs of all ages welcomed to play park featuring 7,000 sq. ft. of outdoor space and local craft beers on tap.`,
      link: "playPark",
      textBtn: "Details",
    },
    {
      title: "Day Care",
      image: daycareImg,
      text: "Your pups are in good hands while you are away. Our staff supervises care for your dogs and are trained thoroughly in PET CPR and First Aid",
      link: "/                                                                                ",
      textBtn: "Details",
    },
    {
      title: "Tap Room",
      image: taproomImg,
      alt: "John Olalde - Unsplash - Taproom",
      text: `All humans ages 21+ and dogs of all ages welcomed to play park featuring 7,000 sq. ft. of outdoor space and local craft beers on tap.`,
      link: "/",
      textBtn: "Details",
    },
    {
      title: "Dog Wash",
      image: dogWashImg,
      text: `All humans ages 21+ and dogs of all ages welcomed to play park featuring 7,000 sq. ft. of outdoor space and local craft beers on tap.`,
      link: "/",
      textBtn: "Details",
    },
    {
      title: "Food Truck & Events",
      image: foodtruckImg,
      text: `All humans ages 21+ and dogs of all ages welcomed to play park featuring 7,000 sq. ft. of outdoor space and local craft beers on tap.`,
      link: "/",
      textBtn: "Details",
    },
  ];
  return (
    <>
      <Welcome />
      <div className="main-container">
        {data.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            image={article.image}
            text={article.text}
            link={article.link}
            textBtn={article.textBtn}
          />
        ))}
      </div>
    </>
  );
}
