import React from 'react'
import { Navbl, ContactForm, ContactHero, FloatingSocials, Footer, InstagramVisit } from '../components'

const Contacts = () => {
  return (
    <div className='bg-[#DADBD5] text-gray-900'>
      <div className="pt-2 md:pt-3">
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