import { connect } from "react-redux";
import SideDisplay from "../components/SideDisplay";
import { addToCart, removeToCart } from "../services/actions/action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeCardHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDisplay);
