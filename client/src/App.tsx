import { Route, Switch } from "wouter";

import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/brands" component={Brands} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
