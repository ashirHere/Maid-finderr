import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'


function Header() {
    return (
            <div>
                {/* <h1>KAAM WALI</h1>
                
                <nav>
                <li><Link to="/">Home</Link></li>
                    <li>Contact</li>
                    <li>About us </li>
                <li><Link to="/login">Login</Link></li> */}
                    
                {/* </nav> */}
                <Link to ="/Home">Home</Link>
                <Link to ="/login">Login</Link>
            </div>
       
        
    );
}
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<Header/>);

export default Header;