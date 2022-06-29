import { Router, Switch, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./components/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
