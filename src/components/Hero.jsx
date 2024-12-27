import { Link } from "react-router-dom"
import circle from "../assets/circle.png"
import circle1 from "../assets/person-1.jpg"
import circle2 from "../assets/person-2.jpg"
import sideImg from "../assets/sideImg.png"
import sideImg1 from "../assets/sideImg1.png"
import sideImg2 from "../assets/sideImg2.png"

const Hero = () => {
  return (
    <section className="max-padd-container mt-15 xl:mt-10">
        <div className="flex flex-col xl:flex-row gap-16">
            {/* Left */}
            <div className="flex justify-center flex-1 flex-col gap-y-8 xl:max-w-[555px] relative">
                <h1 className="h1">
                    Invest in <span className="text-secondary">Your Future</span> with confidence
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid quibusdam, perspiciatis officiis expedita atque voluptate maiores quam amet sunt facilis beatae nostrum reprehenderit, deleniti dolores distinctio. Soluta, itaque aspernatur sequi dolore animi eligendi dolorem. Saepe, nobis animi ducimus provident magni illo fugit maiores consequatur voluptatum ad dolor nisi nihil fugiat nulla dignissimos tempora! Ex?
                </p>
                <div className="flex gap-3">
                    <a href="#listing" className="btn-dark flexCenter rounded-full">Explore Properties</a>
                    <Link to={""} className="btn-secondary flexCenter rounded-full"><span className="medium-20 pr-1">+</span>Add Property</Link>
                </div>
                <div className="flex relative">
                    {/* Clients Images */}
                    <img src={circle} alt=""  className="rounded-full h-[99px] z-30"/>
                    <img src={circle1} alt=""  className="rounded-full h-[80px] shadow-sm absolute left-16 z-20"/>
                    <img src={circle2} alt=""  className="rounded-full h-[80px] shadow-sm absolute left-32 z-10"/>
                </div>
            </div>
            {/* Right */}
            <div className="flex flex-1 flex-col gap-4">
                <div className="rounded-2xl h-[266px] overflow-hidden"><img src={sideImg} alt="" className="rounded-xl object-cover" /></div>
                <div className="flexBetween gap-4">
                    <div className="flex flex-1 rounded-xl"><img src={sideImg1} alt="" className="rounded-xl object-cover aspect-square" /></div>
                    <div className="flex flex-1 rounded-xl"><img src={sideImg2} alt="" className="rounded-xl object-cover aspect-square" /></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
