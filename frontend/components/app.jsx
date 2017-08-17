import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { Footer } from './greeting/footer';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BikeDetailContainer from './bike_detail/bike_detail_container';
import FeaturedBikeContainer from './featured_bikes/featured_bike_container';
import SearchContainer from './search/search_container';
import { SearchAndText } from './greeting/search_and_text';
import BookingsContainer from './bookings/bookings_container';

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route component={GreetingContainer} />
    </Switch>

      <Route exact path="/" component={SearchAndText} />
      <Route exact path="/" component={FeaturedBikeContainer} />
      <Route path="/bikes/:bikeId" component={BikeDetailContainer} />
      <Route path="/search" component={SearchContainer} />
      <ProtectedRoute path="/bookings/:userId" component={BookingsContainer} />
      
      <hr></hr>

      <Switch>
        <Route exact path="/" component={Footer} />
        <Route path="/bikes/:bikeId" component={Footer} />
        <Route path="/search" component={Footer} />
        <ProtectedRoute path="/bookings/:userId" component={Footer} />
      </Switch>

  </div>
);

export default App;
