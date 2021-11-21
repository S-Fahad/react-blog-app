import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import Category from "./components/allBlogs/category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/category/:category" component={Category} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
