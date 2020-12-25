import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/">
          <AboutUs />
        </Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
