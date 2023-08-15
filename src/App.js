import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './loginpage';
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/" component={Home} /> */}
      </Routes>
      <h1>hi am</h1>
    </div>
  </Router>
    
  );
}


export default App;


