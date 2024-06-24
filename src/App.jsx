import React, { useEffect, useState } from 'react'
import Header from './Components/1-Header/Header'
import Hero from './Components/2-Hero/Hero'
import Menu from './Components/3-Menu/Menu'
import Contact from './Components/4-Contact/Contact'
import Footer from './Components/5-Footer/Footer'



export default function App() {
  
  const [isTure, setIsTure] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300){
        setIsTure(true)
      }else{
        setIsTure(false)
      }
    }
    )
  }
  )

  return (
    <div id='up' className='container' >
      
      <Header />
      <Hero/>
      <div className='divider'/>
      <Menu/>
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer/>


        <a style={{opacity: isTure? 1 : 0, transition: "3s"}} href="#up">
        <button className='icon-keyboard_arrow_up scrolltop'></button>
        </a>
    </div>
  )
}
