import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// import { Nav } from './components/Nav/Nav';
import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
import GlobalStyle from './styles/GlobalStyle';
import ScrollTop from './components/ScrollTop';

          // <Route exact path="/work" component={Projects} />
          // <Route exact path="/contact" component={ContactUs} />

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
        </Switch>

        <ScrollTop />
      </AnimatePresence>
    </div>
  );
}

export default App;