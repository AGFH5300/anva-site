import { Redirect, Route, Switch } from "wouter";

import Layout from "./components/site/Layout";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import GreenShippingSolutions from "./pages/GreenShippingSolutions";
import HardToSourceMarineOemSpares from "./pages/HardToSourceMarineOemSpares";
import Home from "./pages/Home";
import MarineEngineRoomMachinerySpares from "./pages/MarineEngineRoomMachinerySpares";
import RidingSquads from "./pages/RidingSquads";
import Services from "./pages/Services";

function App() {
  return (
    <Switch>
      <Route path="/products">
        <Redirect to="/products-brands" />
      </Route>
      <Route path="/brands">
        <Redirect to="/products-brands" />
      </Route>
      <Route path="/green-shipping">
        <Redirect to="/green-shipping-solutions" />
      </Route>
      <Route path="/services/riding-squads">
        <Layout>
          <RidingSquads />
        </Layout>
      </Route>
      <Route path="/services">
        <Layout>
          <Services />
        </Layout>
      </Route>
      <Route path="/products-brands">
        <Layout>
          <Brands />
        </Layout>
      </Route>
      <Route path="/green-shipping-solutions">
        <Layout>
          <GreenShippingSolutions />
        </Layout>
      </Route>
      <Route path="/spares/engine-room-machinery">
        <Layout>
          <MarineEngineRoomMachinerySpares />
        </Layout>
      </Route>
      <Route path="/spares/hard-to-source-oem">
        <Layout>
          <HardToSourceMarineOemSpares />
        </Layout>
      </Route>
      <Route path="/contact">
        <Layout>
          <Contact />
        </Layout>
      </Route>
      <Route path="/about">
        <Layout>
          <About />
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
