import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";

function About() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%",
        markers:false
        

      }
      
    })

    gsap.from(".line",{
      x:-100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%",
        markers:false

      }
      
    })

    
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%",
        markers:false

      } 
    })

    
    gsap.from(".aboutdetails ul",{
      x:-100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 30%"

      }
      
    })

    gsap.from(".right-about",{
      x:100,
      duration:1,
      opactiy:0,
      stagger:1,
      scrollTrigger:{
        trigger:".right-about",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 30%"

      }
      
    })
    


    
  })
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        
      <div className="aboutdetails">
        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li>
              <span>NAME</span> : AMIT VERMA
            </li>
            <li>
              <span>AGE</span> : 19 YEARS
            </li>
            <li>
              <span>GENDER</span> : MAlE
            </li>
            <li>
              <span>LANGUAGE KNOWN</span> : HINDI , ENGLISH , MAGAHI
            </li>
            
          </ul>
        </div>

        <div className="education">
          <h1>Education</h1>
          <ul>
            <li>
              <span>DEEGRE</span> : DIPLOMA IN CYBER SECURITY
            </li>
            <li>
              <span>BRANCH</span> : COMPUTER SCIENCE
            </li>
            <li>
              <span>CGPA</span> : NONE
            </li>
           
            
          </ul>
        </div>

        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>
              MERN STACK WEB DEVELOPER
            </li>
            <li>
              PYTHON DEVELOPER
            </li>
            <li>
              PHP DEVELOPER
            </li>
            
            
          </ul>
        </div>
      </div>
      </div>


      <div className="right-about">
      <Card title='Mern stack web devloper' image={mern}/>
      <Card title='Python' image={java}/>
      <Card title='java script' image={dsa}/>
      </div>
    </div>
  )
}

export default About
