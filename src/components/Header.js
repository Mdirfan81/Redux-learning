import React from "react";

const Header = (props) => {
  return (
    <div>
      <div>
        <div className="add-to-cart">
          <div className="card-bg">
            <span className="card-number">
              {props.data.length}
              {/* {props.data.length ? props.data.length : 0} */}
            </span>
          </div>
          <img src="https://cdn0.iconfinder.com/data/icons/seo-marketing-hand-drawn-vol-3/52/groceries__shoppingcart__ecommerce__shopping__bucket__trolley__store-512.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;

// <div className="add-to-cart">
// <div className="card-bg">
//   <span className="card-number">
//     {props.data.length}
//     {/* {props.data.length ? props.data.length : 0} */}
//   </span>
// </div>
// <img src="https://cdn0.iconfinder.com/data/icons/seo-marketing-hand-drawn-vol-3/52/groceries__shoppingcart__ecommerce__shopping__bucket__trolley__store-512.png" />
// </div>
