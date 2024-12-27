import About from "../components/About"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Listings from "../components/Listings"


const Home = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Features/>
    <Listings/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home