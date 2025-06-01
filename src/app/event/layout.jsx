import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import Event from './page'

function eventLayout({children}) {
  return (
    <div className="wrapper">
        <Navbar/>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default eventLayout