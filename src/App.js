
import React, {Component} from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container" style={{ paddingTop: "30px" }}>
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="movies" />
            <Redirect exact to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
