import { Route, Switch } from "wouter";

import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
