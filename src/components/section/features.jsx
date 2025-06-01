import { getFeatureBySlug } from '@/sanity/lib/api'
import React from 'react'

import React from 'react'

const Features =async () => {
    const features=await getFeatureBySlug(slug)
  return (
    <div>
        <p></p>
    </div>
  )
}


export default Features