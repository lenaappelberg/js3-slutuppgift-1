import { getEvents } from '@/sanity/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events= async ({})=> {
      const events=await getEvents()
  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap:8">
        {
          events && events.map(event=>(
            <Link key={event._id} href={`/event/${event.slug}`} className="border-slate-700 overflow-hidden ">
              <div className='w-full aspect-video'>
                <Image 
                src={event.image.url} alt={event.image.alt} width={300} height={200} className="w-full h-full object-cover">
                </Image>
              </div>
            </Link>
          ))
        }
    </div>
  )
}

export default Events