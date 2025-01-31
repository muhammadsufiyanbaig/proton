import React from "react";

import NavBarContainer from "../container/navbar";
import Landing from "../Components/LandingPage";
import ProtonSaga from "../Components/ProtonSaga";
import Sagapdf from "../Components/ProtonSaga/protonsagapdf.js";

import X70 from "../Components/X70";
import Slickyslider from "../Components/slickySlider";
import Footer from "../Components/otherPages/footer";
import Disclaimer from "../Components/otherPages/footer/disclaimer.js"
import Privacy from "../Components/otherPages/footer/privacy.js"
import BookingSaga from "../Components/otherPages/Booking/booking";
import BookingX70 from "../Components/otherPages/Booking/X70Booking";

import createBrowserHistory from "history/createBrowserHistory";

import AboutComponent from '../Components/otherPages/About/about';

import AboutProton from "../Components/otherPages/Brand"
import Careers from "../Components/otherPages/careers"
import Contact from "../Components/otherPages/Contact"
import News from "../Components/otherPages/News"
import Warranty from "../Components/otherPages/Warranty"
import Sitemap from "../Components/otherPages/Sitemap"
import DealerInfo from "../Components/LandingPage/landingSection9Map/dealerInfoPage"
import ReactGA from 'react-ga';
import { Router, Route, Switch } from "react-router-dom";

// const customHistory = createBrowserHistory();


export default function Routing() {

  const customHistory = createBrowserHistory();
  return (
    <div>
      <Router history={customHistory}>
        <NavBarContainer history={customHistory} />
        <Switch>
          <Route exact path="/" history={customHistory} component={Landing} />
          <Route path="/proton-saga" component={ProtonSaga} />
          <Route path="/Saga-pdf" component={Sagapdf} />
          <Route path="/x70" component={X70} />
          <Route path="/slider" component={Slickyslider} />
          <Route path="/Saga-Booking" component={BookingSaga} />
          <Route path="/X70-Booking" component={BookingX70} />
          <Route path='/About' component={AboutComponent} />
          <Route path='/About-Proton' component={AboutProton} />
          <Route path='/Careers' component={Careers} />
          <Route path='/Contact' component={Contact} />
          <Route path='/News' component={News} />
          <Route path='/Warranty' component={Warranty} />
          <Route path='/dealerInfo' component={DealerInfo} />
          <Route path='/Disclaimer' component={Disclaimer} />
          <Route path='/Privacy' component={Privacy} />
          <Route path='/sitemap' component={Sitemap} />
        </Switch>
        <Footer history={customHistory} />
      </Router>
    </div>
  );

}
