import { connect } from "react-redux";
import { addToCart } from "../services/actions/action";
import Home from "../components/Home";

//this used for updating the data where ever is in use.
const mapStateToPrpops = (state) => ({
  data: state.cardItems,
  // data: state,
  //   this cardItems is coming from reducer.js, where it is returning the data in cardItems therefor we are using this.
});

//this will update the data in redux store.
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToPrpops, mapDispatchToProps)(Home); // this is a container.
// export default Home;
