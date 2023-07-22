'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import React, { useEffect } from 'react';
import Regional from './regional/page';
import National from './national/page';
import Constituency from './constituency/page';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { user, loading, } = useAuth();
  console.log(user?.token)
  const router = useRouter();
  // const role = sessionStorage.getItem('role');
  // const token = sessionStorage.getItem('token');
  // console.log(user?.token)
  useEffect(() => {
    if (!loading && !user) {
      alert("You are not authorized to access this page");
      router.push('/')
    }
  }, [loading, user, router,]);

  if (!loading) {
    if (user?.level === 'Constituency') {
      return (
        <>
          <Constituency/>
        </>
      );
    } else if (user?.level === 'Region') {
      return (
        <>
          <Regional/>
        </>
      );
    } else if (user?.level === 'National') {
      router.push('/dashboard/national')
      // return (
      //   <>
      //     <National/>
      //   </>
      // );
    }
    // else if (!user?.token){
    //   return(
    //     <>
    //       <p>Please login again</p>
    //     </>
    //   )
    // }
  }
  return null;
  // (
  //   <>
  //     {loading && <div>Loading</div>}
  //     {/* {!loading&& role === "Region" && <Regional/>}
  //     {!loading&& role ==="National" && <National/>} */}
  //   </>
  // ); // or any default content while loading
};

export default Dashboard;