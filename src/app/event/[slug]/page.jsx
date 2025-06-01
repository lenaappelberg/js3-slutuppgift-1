import { getEventBySlug } from '@/sanity/lib/api'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const Eventdetail =async ({params}) => {
  const {slug}=await params
  const event= await getEventBySlug(slug)
  console.log(slug)
  
  if (!event) {
    return notFound()
  }
  
  console.log(event)
  console.log(event._id)
  //event details page
  return (
    <div>
      <h2>{event.name}</h2>
      <div className="w-full aspect-video">
          <Image src={event.image.url} alt={event.image.alt || 'Event image'} height={500} width={500} />
      </div>
      
    </div>
  )
}

export default Eventdetail