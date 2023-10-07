'use client';
import React, { useState, FormEvent, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useAuth } from '@/app/backjob/authmiddleware';
import { z } from 'zod'; 
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/app/backjob/schema';
import { useForm } from 'react-hook-form';

type Inputs = z.infer<typeof LoginSchema>
//   import { ironSession, Session } from 'next-iron-session';
// import { decryptData, encryptData } from '@/app/backjob/session';


  const LoginScreen: React.FC= () => {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting},
      setError
    } = useForm<Inputs>({
      resolver: zodResolver(LoginSchema)
    });
    const { user, error, loading, login, logout } = useAuth();
    const router = useRouter();
    
    const handleSignIn = async(data: Inputs) => {
      await login(data.phoneNumber, data.password);
    }
    return (
      <> 
      {/* {!loading? null : (<Loading/> )} */}
      <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="sm:shadow-xl pb-8 px-8 pt-12 sm:bg-white rounded-xl space-y-12">
          <h1 className="font-semibold text-2xl">LOGIN</h1>
          {error && <p className='text-red-400'>{error}</p>}
          {errors.phoneNumber &&(
            <p className= 'text-red-500'>{`${errors.phoneNumber.message}`}</p>
          )}
          {errors.password &&(
            <p className= 'text-red-500'>{`${errors.password.message}`}</p>
          )}
            <form onSubmit={handleSubmit(handleSignIn)} className='space-y-12 w-full sm:w-[400px]'>
              <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Mobile No.
                </label>
                <input
                {...register("phoneNumber", {
                  required: "Phone Number is required"
                })}
                  className="w-full border border-gray-400 rounded py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="tel"
                  type="tel"
                  placeholder="Enter your mobile"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                 {...register('password', {
                  required:'Password is Required',
                  minLength: {
                    value: 6,
                    message:"Password must be at least of length 6 characters."
                  }
                  })}
                  className="w-full h-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <button
                  disabled = {isSubmitting}
                  className="w-full submit-button bg-blue-600 hover:bg-blue-800 
                  text-white font-bold py-2 px-4 rounded
                  disabled:bg-gray-500"
                  type="submit">
                  Sign In
                </button> 
                {/* <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a> */}
                </div>
                 </form>
        </div>
     </div> 
      </>
    );
  };

  export default LoginScreen;
      {/* <div className="m-3 p-2">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        </div>
     <div className="flex items-center justify-center h-screen w-1/2">     
        <div className="flex justify-center items-center w-full ">
          <div className="shadow-lg shadow-indigo-500/50 rounded p-5 w-3/4 h-1/3">
            
              </div>
            </div>
         </div>*/}
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