import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { history } from "./configureStore";
import customMuiTheme from "./customMuiTheme";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Prayers from "./components/Prayers";
import PrayerList from "./components/PrayerList";
import PrivateRoute from "./containers/PrivateRoute";
import ErrorWrapper from "./containers/ErrorWrapper";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <ErrorWrapper>
      <MuiThemeProvider theme={customMuiTheme}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/prayers" component={Prayers} />
            <PrivateRoute path="/prayerlist" component={PrayerList} />
            <Redirect to="/welcome" />
          </Switch>
          <BottomNavigation />
        </ConnectedRouter>
      </MuiThemeProvider>
    </ErrorWrapper>
  );
}

export default App;
