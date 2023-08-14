import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './loginpage';
import Home from './Home';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
    
  );
}


export default App;


