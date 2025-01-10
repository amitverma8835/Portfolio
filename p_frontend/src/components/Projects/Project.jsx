import React from 'react'
import Card from '../Card/Card'
import './Project.css'
import va from '../../assets/va.png' 
import fa from '../../assets/fw.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

function Project() {
  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })

    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
  })
  return (
    <div id='projects'>
      
      <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title='VIRTUAL ASSITANT' image={va}/>
        <Card title="AI POWERED FITNESS WEBSITE" image={fa}/>
        <Card title="AI CHAT BOT"/>
        <Card title="INDIAN NEWS"/>
        <Card title="TO-DO APP"/>
        
      </div>

    </div>
  )
}

export default Project
