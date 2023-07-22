'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import { Header } from '@/app/components/Header'
import Sidebar from '@/app/components/Sidebar'
import { useRouter } from 'next/navigation';

export default function NationalLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const { loading, user, logout } = useAuth();
    const router = useRouter();
    if(loading){
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p>Loading...</p>
      </div>
    )
  }else if (!loading&& !user){
    router.push('/')
  }
  
  return (
    <>
    {!loading&& user&&(
     <section>
        <Sidebar>
        <Header/>
        {children}
        </Sidebar>       
    </section>
    )}
    </>
   
    
  )
}