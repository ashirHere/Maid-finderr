import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
    <img src = {logo} className='logo' ></img>
    <h1>KAAM WALI</h1>
    <nav>
    <li>Home</li>
    <li>Contact</li>
    <li>About us </li>
    </nav>
    <Mybutton>Login</Mybutton>
    
    <div className="App">
      
        

        
        </div>
        </> 

   
  );
}
function Mybutton() {
  return (
<div >
  <button>
   Log In
  </button>

</div>
  )
}



export default App;


