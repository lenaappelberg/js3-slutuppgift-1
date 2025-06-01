import Events from '@/components/section/events'
import { getEvents } from '@/sanity/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Event = async () => {
  //event page
  //console.log(events) 
  return (
    <div className="wrapper">
      <Events/>
    </div>
  )
}

export default Event