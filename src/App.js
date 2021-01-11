import React from "react"
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import Navigation from "./Navigation";
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
function App(){
  return <BrowserRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie/:id" component={Detail}></Route>
  </BrowserRouter>

}
export default App;