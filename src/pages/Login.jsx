// App.js

import  { useState } from 'react';

import Logo from '../assets/Group 3.png'
import Nav from '../components/Nav.jsx'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username === 'Test' && password === 'Test123') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-900 p-8 rounded shadow-md max-w-md w-full">
        {loggedIn ? (
         <Nav/>
        ) : (
          <div className=''>
            <div className='flex justify-center'>
              <img src={Logo} className=''/>
            
            </div>
            <p className='flex justify-center py-4 text-[#36A546CC]'>#We are Electric</p>
            <h2 className="text-2xl text-center mb-4"></h2>
            <form className="space-y-6 ">
              <label className="block ">
                
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full  p-4  bg-gray-600 shadow-inner shadow-gray-500 shadow-blur-md shadow-spread-sm rounded-full "
                  placeholder='Test'
                />
              </label>
              <label className="block ">
              
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full  p-4  bg-gray-600 shadow-inner shadow-gray-500 shadow-blur-md shadow-spread-sm rounded-full "
                  placeholder='Test123'
                />
              </label>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full  bg-gradient-to-r from-[#00FF2580] to-[#36A54680] border-2 border-solid border-[#8CFF0026]  text-white p-4 rounded-full"
              >
                Login
              </button>
              <a className='text-[#006b11] flex justify-center'>Forget Password?</a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
