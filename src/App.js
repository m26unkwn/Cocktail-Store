import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./screens/Home";
import About from "./screens/About";
import SingleCocktail from "./screens/SingleCocktail";
import { Error } from "./screens/Error";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cocktail/:id'>
          <SingleCocktail />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
