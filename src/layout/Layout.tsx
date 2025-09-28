import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Multimedia from "../components/Multimedia"
import ILayout from "../interface/ILayout"
import { FC } from "react"

const Layout:FC<ILayout> = ({children}) => {
  return (
    <>
        <Header/>
        <Hero/>
            {children}
        <Multimedia/>
        <Footer/>
    </>
  )
}

export default Layout