import { connect } from "react-redux";
import SideDisplay from "../components/SideDisplay";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SideDisplay);
