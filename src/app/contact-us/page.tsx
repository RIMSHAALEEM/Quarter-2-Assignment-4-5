import React from 'react'
import Image from 'next/image'
import Contact from "@/public/contact.png"

const ContactUs = () => {
  return (
    <div>
      <h1 className="h1-contact" style={{color:"black",textAlign:"center",paddingTop:"120px",fontFamily:"TimesNewRoman"}}>Don't Hesitate To Contact Us</h1>
      <Image className="contact" src={Contact} alt="contact-form"></Image>


    </div>
  )
}

export default ContactUs
