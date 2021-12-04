import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import Category from "./components/allBlogs/category";
import Article from "./components/singleArticle/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          {/* <Route path="/category/:category" component={Category} exact /> */}
          <Route path="/category/:category" exact>
            <Navbar />
            <Category />
          </Route>
          <Route path="/article/:id" component={Article} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
