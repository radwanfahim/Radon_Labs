import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";
import "./App.css";
import Nav from "./shared/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
