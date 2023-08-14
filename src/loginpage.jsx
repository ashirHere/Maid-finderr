import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a simple login check
    if (username === 'user' || 'USERNAME' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Wrong Username or Password');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {loggedIn ? (
        <p>Welcome, {username}! You are logged in.</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
