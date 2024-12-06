import Banner from '@/components/Banner'
import CallToActionSection from '@/components/CallToActionSection'
import FAQSection from '@/components/FAQSection'
import Hero from '@/components/Hero'
import RegisterCommunity from '@/components/Register'
import Sponsor from '@/components/Sponsor'
import Testimonials from '@/components/Testimonials'
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
      <RegisterCommunity/>
      <Testimonials/>
      <FAQSection/>
      <CallToActionSection/>
    </main>
  )
}
