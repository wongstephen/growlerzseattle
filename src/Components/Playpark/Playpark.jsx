import React from "react";
import dogPoolImg from "../../assets/dog-in-pool.jpeg";
import "./Playpark.css";

export default function Playpark() {
  return (
    <div>
      <h2>
        Growlerz
        <br />
        Play Park
      </h2>
      <div className="img-container-product">
        <img src={dogPoolImg} alt="Play Park" />
      </div>
      <p>
        Our beautiful off leash play park is designed with both your dog and you
        in mind! Our 7,000 sq. ft. outdoor space provides your pup room to play
        while you enjoy a drink in the sun or under one of our covered areas.
        Our smaller indoor space includes our taproom and plenty of space for
        you and your dog to hang out.
      </p>
      <div>
        <p>
          All dogs must submit registration information prior to entry. To
          expedite the process, online submissions are available.
        </p>
        <button>Online Registration</button>
      </div>
      <div className="product-pricing">
        <div>
          <h2>Play Park</h2>
          <div className="product-line"></div>
          <p>Single daily. May be purchased upon entry.</p>
          <div className="price-container">
            <div>
              <h3>One Dog</h3>
              <p className="price">$12</p>
            </div>
            <div>
              <h3>
                Two Dogs <br />
                {/* <p>Of the same family</p> */}
              </h3>
              <p className="price">$18</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product-pricing">
        <div>
          <h2>Punch Card</h2>
          <div className="product-line"></div>
          <p>10 Discounted visits. Get the 11th free!</p>

          <div className="price-container">
            <div>
              <h3>One Dog</h3>
              <p className="price">$100</p>
            </div>
            <div>
              <h3>
                Two Dogs <br />
                {/* <p>Of the same family</p> */}
              </h3>
              <p className="price">$170</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product-pricing">
        <div>
          <h2>Membership</h2>
          <div className="product-line"></div>
          <p>
            Play park members get unlimited visits to our play park during
            regular hours and receive a 5% discount for Day Care stays. Monthly
            and annual membership packages are available.
          </p>
          <h2>Monthly</h2>
          <div className="price-container">
            <div>
              <h3>One Dog</h3>
              <p className="price">
                $49 <br />
                {/* Monthly */}
              </p>
            </div>
            <div>
              <h3>
                Two Dogs <br />{" "}
              </h3>
              <p className="price">
                $69 <br />{" "}
              </p>
            </div>
          </div>

          <h2>Annually</h2>
          <div className="price-container">
            <div>
              <h3>One Dog</h3>
              <p className="price">
                $539 <br />
                {/* Monthly */}
              </p>
            </div>
            <div>
              <h3>
                Two Dogs <br />
              </h3>
              <p className="price">
                $759 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
