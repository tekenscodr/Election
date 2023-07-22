  'use client';
  import React, { useState, FormEvent, useEffect } from 'react';
  import { redirect, useRouter } from 'next/navigation';
import { useAuth } from '@/app/backjob/authmiddleware';
//   import { ironSession, Session } from 'next-iron-session';
// import { decryptData, encryptData } from '@/app/backjob/session';


  const LoginScreen: React.FC= () => {
    const { user, loading, login, logout } = useAuth();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const { token, loading } = useAuth();
    const router = useRouter();
    
    const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
       await login(phoneNumber, password);
      } catch (error) {
        setError('Login failed. Please check your credentials.');
      }
    };
    return (
      <> 
      {/* {!loading? null : (<Loading/> )} */}
      {error && <p>{error}</p>}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Mobile No.
              </label>
              <input
                className="w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="tel"
                type="tel"
                placeholder="Enter your mobile"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  };

  export default LoginScreen;

  // const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     try {
  //       const response = await signIn(phoneNumber, password);
  //       const token = await response.token;
  //       console.log(response)
  //       await sessionStorage.setItem('token', token);
  //       // Redirect to protected route or perform any other action
  //       console.log('Login successful');
  //       const role = response.level;
  //       console.log(role);
        
  //       // Check if component is still mounted
  //         // if (role === 'constituency' || role === 'Polling Station') {
  //         //   router.push('/dashboard/constituency');
  //         // } else if (role === 'region') {
  //         //   router.push('/dashboard/regional');
  //         // } else {
  //         //   router.push('/dashboard/national');
  //         // }
  //     } catch (error) {
  //       // Handle error
  //       console.error('Login failed', error);
  //       alert(`Login Failed ${error}`);
  //     }
  //   };