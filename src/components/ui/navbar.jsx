import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="wrapper flex">
      <Link href="/" className="font-bold p-4">Home</Link>
      <Link href="/event" className="font-bold p-4">Events</Link>
    </nav>
  )
}

export default Navbar