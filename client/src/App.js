import './App.css';
import Home from './Page/Home/Home';
import Register from "./Page/Register/Register"
import Login from "./Page/Login/Login"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Profile from './Page/Profile/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/Kartik" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
