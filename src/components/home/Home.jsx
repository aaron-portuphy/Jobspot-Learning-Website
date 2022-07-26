import React from "react"
import Hero from "./hero/Hero"
import AboutCard from "../about/AboutCard"
import HAbout from './HAbout'
import Test from './testimonal/Test'
import Hblog from "../blog/Hblog"
import Hprice from "./testimonal/Hprice"

const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <HAbout />
        <Test />
        <Hblog />
        <Hprice />
    </>
  )
}

export default Home