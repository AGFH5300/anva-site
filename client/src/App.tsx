import { Switch, Route } from "wouter";

function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>404 Not Found</Route>
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
