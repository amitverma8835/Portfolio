import React from 'react'
import con from '../../assets/contact.png'
import './Contact.css'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })

    gsap.from("rightcontact",{
      x:100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:"rightcontact",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
        
  })

  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>

      <div className="rightcontact">
        <form action="https://formspree.io/f/xlddarzn" method='POST'>
          <input type="text" name="Username" id="name" placeholder='name'/>
          <input type="email" name="email" id="email" placeholder='email' />
          <textarea name="message" id="textarea" placeholder='message'></textarea>
          <input type="submit"  id="btn" value="Submit" />

        </form>
      </div>
    </div>
  )
}

export default Contact
