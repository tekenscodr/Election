'use client'
import Sidebar from '@/app/components/Sidebar'
import ConstituencySide from '@/app/components/ConstituencySide'
import React from 'react'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
  </main>
    
  )
}