import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainVideo from "./components/MainVideo";
// import Categories from "../src/components/Category_Mobile";
import "./components/mainVideo.css";
import Slider from "../src/components/Slider";
import Route1 from "../src/components/RouteTest";
import Route2 from "../src/components/RouteT2";
import Titles from "../src/components/MainTitles";
import MainPage from "../src/components/MAINPAGE";
import "../src/components/MainTitles.css";
import DevelopmentLink from "../src/components/DevelopmentLink";
import ProothisiLink from "../src/components/Proothisi";
import HostingLink from "../src/components/Hosting.js";
import DesignLink from "../src/components/Design";
import VeltistopoihshLink from "../src/components/Veltistopoihsh";
import EkpaidevshLink from "../src/components/Ekpaidevsh";
// import Cards from "../src/components/Cards";
function App() {
  return (
    <Router>
      <div className='App'>
        <MainVideo />
        <Slider />
        <Titles />

        {/* <Categories /> */}
        {/* <Cards /> */}

        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/Υπηρεσίες' component={Route1} />
          <Route exact path='/route2' component={Route2} />
          <Route exact path='/DevPage' component={DevelopmentLink} />
          <Route exact path='/Προωθηση' component={ProothisiLink} />
          <Route exact path='/Hosting' component={HostingLink} />
          <Route exact path='/Design' component={DesignLink} />
          <Route exact path='/Βελτιστοποιηση' component={VeltistopoihshLink} />
          <Route exact path='/Εκπαιδευση' component={EkpaidevshLink} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
