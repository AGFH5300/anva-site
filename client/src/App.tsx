import { Redirect, Route, Switch } from "wouter";

import Layout from "./components/site/Layout";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/services">
        <Redirect to="/brands" />
      </Route>
      <Route path="/brands">
        <Layout>
          <Brands />
        </Layout>
      </Route>
      <Route path="/contact">
        <Layout>
          <Contact />
        </Layout>
      </Route>
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
