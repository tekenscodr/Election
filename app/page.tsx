'use client';
import React, { useEffect } from 'react';
import LoginScreen from './(auth)/login/page';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  // useEffect(() =>{
  //   router.refresh()
  // })
  return (
  <>
    <LoginScreen/>
  </>
  );
};