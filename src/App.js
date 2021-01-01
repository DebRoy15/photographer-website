import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";
//Animations
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
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
      </AnimatePresence>
      <GlobalStyle />
      <ScrollTop />
    </div>
  );
}

export default App;
