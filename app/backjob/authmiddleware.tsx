'use client'
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";


interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface User {
  _id: string;
  firstname: string;
  token: string;
  level: string;
  surname: string;
  constituency:string;
  region: string;
  position: string;
  phoneNumber: string;
  email: string;
  status: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }>= ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check if the user's token exists in session storage
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
          // Make an API request to validate the token and fetch user data
          const response = await fetch('https://colbak.vercel.app/auth/verify', {
            method: "POST",
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          if (response.ok) {
            const userData = await response.json();
            const data = { ...userData, token: storedToken };
            setUser(data);
          } else {
            setUser(null);
            sessionStorage.removeItem('token');
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (phoneNumber: string, password: string) => {
    try {
      // console.log({ phoneNumber, password })
      const response = await fetch('https://colbak.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Store the token in session storage
        sessionStorage.setItem('token', token);
        setUser(data);
        console.log(user);
        router.push('/dashboard');
      } else {
        console.error('Login failed');
        }
    } catch (error : unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('An unknown error occurred during login.');
    }
  };
  const logout = async () => {
    try {
      // Make an API request to log out the user
      // const response = await fetch('/api/auth/logout', { method: 'POST' });
      // if (response.ok) {
      //   router.push('/');
      // } else {
      //   console.error('Logout failed');
      // }
        await setUser(null);
        await sessionStorage.removeItem('token');
        router.replace('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetxhUser = async () => {
//       const response = await fetch('http://localhost:2024/auth/login', 
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ phoneNumber, password }),
//     }
//     );
//     const data = await response.json();
//     setUser(response);
//     setLoading(false)
//     };
//     fetxhUser();

//   }, []);
//   return(
//     <AuthContext.Provider value={{ user, loading }}>
//     {children}
//     <AuthContext.Provider>
//   );
// };

// export const userUser = () => 





/******************** TED'S CODE **************/
// Import Modals
// import { useState, useEffect, useContext } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import {
//   httpRequest,
// } from "../utils/functions";

// import AuthContext from "../context/auth-context";


// function LuffysTable() {
//   const [deliveries, setDeliveries] = useState([]);
//   const { GLOBAL_OBJ, AUTH_LOGOUT } = useContext(AuthContext);

//   async function _handleGetDeliveriesByStatus(pagenumber, date_obj = null) {
//     let url = `https://mugichan/api/v1.0/test/get-irates/pagingation/${pagenumber}/100`;

//     var c = await httpRequest(url, undefined, undefined, {
//       headers: {
//         Authorization: `Bearer ${GLOBAL_OBJ.token}`,
//         "x-user-agent": "User Swoove Super-Admin-Panel 1.0.0",
//       },
//     });

//     if (c.code === 200) {
//       setDeliveries(c.responses);
//     } else if (c.code === 401) {
//       AUTH_LOGOUT();
//     } else {
//       toast.error(c.message);
//       setDeliveries([]);
//     }
//   }
// }