import { getEventBySlug } from '@/sanity/lib/api'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const Event =async () => {
  const event= await getEventBySlug("summer-event")
    
    if (!event) {
      return notFound()
    }
    
    console.log(event)
    console.log(event._id)
    //event details page
    return (
      <div>
        <h2 className="text-xl uppercase">{event.name}</h2>
        <div className="w-full aspect-video">
            <Image src={event.image.url} alt={event.image.alt || 'Event image'} height={500} width={500} />
        </div>
        
      </div>
    )
}

export default Event