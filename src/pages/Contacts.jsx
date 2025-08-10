import React from 'react'
import { Navbl, ContactForm, ContactHero, FloatingSocials, Footer, InstagramVisit, AnnouncementBar } from '../components'

const Contacts = () => {
  return (
    <div className='bg-[#DADBD5] text-gray-900'>
    <AnnouncementBar />
      <div className="">
        <Navbl/>
      </div>
      <ContactHero />
      <div id="contact-form">
        <ContactForm/>
      </div>
      <FloatingSocials />
      <InstagramVisit />
      <Footer />
    </div>
  )
}

export default Contacts