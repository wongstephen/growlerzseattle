import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Playpark.css";

import PageTitle from "../../components/PageTitle/PageTitle";

import { Button, Alert } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import dogPoolImg from "../../assets/dog-in-pool.jpeg";

export default function Playpark() {
  const key = process.env.REACT_APP_WEATHER_API;
  const [weather, setWeather] = useState({ text: "", temp: "", imgsrc: "" });

  const getWeather = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=98118&aqi=no`
    );
    const data = await res.json();
    setWeather({
      text: data.current.condition.text,
      temp: data.current.temp_f,
      imgsrc: data.current.condition.icon,
    });
  };

  useEffect(() => getWeather, []);

  return (
    <div>
      <PageTitle title="Growlerz" subtitle="Play Park" />
      <div className="park-weather">
        Current Park Conditions {weather.text} {weather.temp}&deg;!
        <img src={weather.imgsrc} alt="Weather Icon"></img>
      </div>
      <div className="section-intro">
        <div className="img-container-product">
          <img src={dogPoolImg} alt="Play Park" />
        </div>
        <p className="desc intro">
          Our beautiful off leash play park is designed with both your dog and
          you in mind! Our 7,000 sq. ft. outdoor space provides your pup room to
          play while you enjoy a drink in the sun or under one of our covered
          areas. Our smaller indoor space includes our taproom and plenty of
          space for you and your dog to hang out.
        </p>
      </div>

      <div className="alert-container">
        <Alert severity="info" className="alert">
          <p className="alert">
            Vaccination records ( Rabies, Bordetella & DHPP mandatory) must be
            submitted and approved before entry to daycare or use of play park.
            All dogs should be on flea and tick preventative and be wearing a
            quick release collar. No prong or chain collars are allowed. <br />
            <br />
            ​All dogs over 7 months of age must be spayed / neutered. Please set
            up a profile for your dog using the link below and include his/her
            vaccination records. You will be notified once approved. There is no
            cost to set up a profile for your dog.
          </p>
          <br />
          <br />
          <Button variant="text">
            Submit Info <ArrowRightAltIcon />
          </Button>
        </Alert>
      </div>
      {/* Product Pricing */}
      <div className="product-pricing">
        <div className="product-pricing-card">
          <h2>Play Park</h2>
          <div className="product-line"></div>
          <p className="desc">Single daily entry. Purchased upon entry.</p>
          <div className="price-container">
            <div>
              <h3>One Dog</h3>
              <p className="price">
                <span className="currency">$</span>12
              </p>
            </div>
            <div>
              <h3>
                Two Dogs* <br />
              </h3>
              <p className="price">
                <span className="currency">$</span>18
              </p>
              <p className="disclaimer">*Of the same family</p>
            </div>
          </div>
        </div>

        <div className="product-pricing-card">
          <h2>Punch Card</h2>
          <div className="product-line"></div>
          <p className="desc">
            Good for 10 Discounted visits. The 11th visit is free!
          </p>
          <div className="price-container">
            <div>
              <h3>One Dog</h3>
              <p className="price">
                <span className="currency">$</span>100
              </p>
            </div>
            <div>
              <h3>
                Two Dogs <br />
              </h3>
              <p className="price">
                <span className="currency">$</span>170
              </p>
              <p className="disclaimer">*Of the same family</p>
            </div>
          </div>
          <Button variant="text" className="getStarted">
            Get Started <ArrowRightAltIcon />
          </Button>
        </div>
        <div className="product-pricing-card " id="member-card">
          <h2>Membership</h2>
          <div className="product-line"></div>
          <p className="desc">
            Play park members get unlimited visits to our play park during
            regular hours and receive a 5% discount for Day Care stays. Monthly
            and annual membership packages are available.
          </p>
          <div className="price-container-member">
            {/* Monthly Membeership */}
            <div className="member-flex">
              <h3 className="price-type">Monthly</h3>
              <div className="price-container member">
                <div>
                  <h3>One Dog</h3>
                  <p className="price">
                    <span className="currency">$</span>49
                    <br />
                  </p>
                </div>
                <div>
                  <h3>
                    Two Dogs <br />
                  </h3>
                  <p className="price">
                    <span className="currency">$</span>69 <br />
                  </p>
                  <p className="disclaimer">*Of the same family</p>
                </div>
              </div>
            </div>
            {/* Yearly Membeership */}
            <div className="member-flex">
              <h3 className="price-type">Annually</h3>
              <div className="price-container">
                <div>
                  <h3>One Dog</h3>
                  <p className="price">
                    <span className="currency">$</span>539 <br />
                  </p>
                </div>
                <div>
                  <h3>
                    Two Dogs <br />
                  </h3>
                  <p className="price">
                    <span className="currency">$</span>759 <br />
                  </p>
                  <p className="disclaimer">*Of the same family</p>
                </div>
              </div>
            </div>
          </div>
          <Button variant="text" className="getStarted">
            Get Started <ArrowRightAltIcon />
          </Button>
        </div>
      </div>
      {/* Park Rules */}
      <div className="park-rules">
        <p className="park-rules-desc">
          <strong>
            Patrons using the play park will be responsible for monitoring their
            dog’s behavior and for cleaning up after their dog(s). Any
            aggressive behavior or fighting will not be tolerated.{" "}
          </strong>
          <br />
          <br />
          First offense: all involved dogs will be asked to be put on a leash.
          <br />
          <br />
          Second offense: dogs will be asked to leave that day. Third offense,
          dogs will no longer be allowed to access services.
          <br />
          <br />
          Payments for services will be forfeited (at a pro-rated rate as
          applicable). <br />
        </p>
        <div className="park-rules-container">
          Check out our full list of play park rules
          <br />
          <Link to="/parkrules">
            <Button variant="outlined" className="getStarted park-rules-btn">
              Play Park Rules
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
