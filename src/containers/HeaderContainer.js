import { connect } from "react-redux";
// import { addToCart } from "../services/actions/action";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  //   addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
