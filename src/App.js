import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import SideDisplayContainer from "./containers/SideDisplayContainer";

function App() {
  return (
    <div className="App">
      <h1>Wel come Irfan</h1>
      <HeaderContainer />
      <HomeContainer />
      <SideDisplayContainer />
    </div>
  );
}

export default App;
