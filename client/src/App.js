import './App.css';
import Header from './Components/Header/Header';
import Register from "./Page/Register/Register"
import Login from "./Page/Login/Login"
import {BrowserRouter, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
