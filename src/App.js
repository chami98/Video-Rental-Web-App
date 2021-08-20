import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

function App() {
  return (
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
  );
}

export default App;
