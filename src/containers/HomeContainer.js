import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/action";
import Home from "../components/Home";

//this used for updating the data where ever is in use.
const mapStateToProps = (state) => ({
  data: state.cardItems,
  // data: state,
  //   this cardItems is coming from reducer.js, where it is returning the data in cardItems therefor we are using this.
});

//this will update the data in redux store.
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeCardHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home); // this is a container.
// export default Home;
