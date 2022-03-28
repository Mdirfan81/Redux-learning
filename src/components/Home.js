import React from "react";
import "./home.css";
// import Header from "./Header";
const Home = (props) => {
  console.warn("Home", props.data);
  return (
    <div>
      <h2> Home Component </h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="data:image/jpeg;base64,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"
            alt="Phone"
          />
        </div>
        <div className="text-wrapper item">
          <span> iPhone </span>
          <br /> <span> Price: $1000 </span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iPhone 11" })
            }
          >
            Add to card
          </button>

          <button
            style={{ marginTop: "10px" }}
            onClick={() => props.removeCardHandler()}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
