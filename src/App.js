import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import Category from "./components/allBlogs/category";
import Article from "./components/singleRticle/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/category/:category" component={Category} exact />
          <Route path="category/cate/:id" component={Article} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
