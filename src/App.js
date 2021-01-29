import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainVideo from "./components/MainVideo";
import Categories from "../src/components/Category_Mobile";
import "./components/mainVideo.css";
import Slider from "../src/components/Slider";
import Route1 from "../src/components/RouteTest";
import Route2 from "../src/components/RouteT2";
import Titles from "../src/components/MainTitles";
import "../src/components/MainTitles.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <MainVideo />

        <Slider />
        <Titles />
        <Switch>
          <Route exact path='/Υπηρεσίες' component={Route1} />
          <Route exact path='/route2' component={Route2} />
          <Categories />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
