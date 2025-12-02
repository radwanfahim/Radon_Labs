import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";
import "./App.css";
import Nav from "./shared/Nav/Nav";
import Footer from "./shared/Footer";

function App() {
  return (
    <div class=" h-screen w-full">
      <Nav />
      <Router>
        <Route path="/" component={Home} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
