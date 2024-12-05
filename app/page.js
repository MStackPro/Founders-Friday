import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Sponsor from '@/components/Sponsor'
import WhatHappens from '@/components/WhatHappens'
import WhatWeOffer from '@/components/WhatWeOffer'
import WhoAreWe from '@/components/WhoAreWe'
import React from 'react'

export default function Page() {
  return (
    <main className=''>
      <Hero/>
      <WhoAreWe/>
      <WhatWeOffer/>
      <WhatHappens/>
      <Sponsor/>
      <Banner/>
    </main>
  )
}
