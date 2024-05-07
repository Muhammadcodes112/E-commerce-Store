import React from 'react'
import { BiAlignMiddle } from "react-icons/bi";
import { FaSearch, FaShoppingCart, FaPlay, FaRegCalendarAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import shoe from '../images/shoe.png';
import headphone from '../images/headphone.png';
import bag from '../images/bag.png';
import watch from '../images/watch.png';
import amanbag from '../images/amanbag.png';
import watchonfoam from '../images/watchonfoam.png';
import leaf from '../images/leaf.png';


const Home = () => {
  return (
    <div className='p-4 h-dvh'>
        <div className='bg-[#f6ccd6]  rounded-lg justify-center items-center p-4 h-lvh'>
            <div className='flex justify-between items-center w-[100%] '>
                <div className="left">
                    <h1 className="">E-Com</h1>
                </div>
                <div className="center p-4">
                    <nav className='flex gap-5'>
                        <ul><li><a href="#" className="nav-link">Home</a></li></ul>
                        <ul><li><a href="#" className="nav-link">Fashion</a></li></ul>
                        <ul><li><a href="#" className="nav-link">Electronics</a></li></ul>
                        <ul><li><a href="#" className="nav-link">Tops and Hoodies</a></li></ul>
                        <ul><li><a href="#" className="nav-link">Health and Beauty</a></li></ul>
                    </nav>
                </div>
                <div className="right flex gap-5 border p-4">
                    <a href='#'><BiAlignMiddle /></a>
                    <a href='#'><FaSearch /></a>
                    <a href='#'><FaShoppingCart /></a>
                </div>
            </div>



            <div className='flex items-center justify-evenly h-[450px] py-3'>
                <div className="left grid gap-5">
                    <div className="one">
                        <h1 className='font-bold'>SPORT <br />NEW COLLECTION</h1>
                    </div>
                    <div className="two">
                        <h1 className='text-3xl'>FOOTWEAR <br /><h1 className='font-bold text-4xl'> BOOT IN BLACK</h1></h1>
                    </div>
                    <div className="three">
                        <h1>The upper is made of animal free and weather resistant cordura nylon</h1>
                    </div>
                    <a href="#" className='bg-black w-fit text-white font-bold px-6 py-3'>SHOP NOW</a>
                </div>

                <div className="right border border-red-500 h-[100px] flex justify-center items-center mt-10">
                    <img src={shoe} alt="Shoe Image" className='ball ' />
                </div>
            </div>

        </div>





        <div className='grid justify-center items-center text-center mt-20 gap-10 h-lvh'>
            <div>
                <h1 className='font-bold text-2xl'>FEATURED PRODUCTS</h1>
                <h1>Nostrum aliquid, illo excepturi quisquam quae enim quia? Doloremque quo inventore iste libero?</h1>
            </div>
                <div className='flex gap-4'>
                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-60 h-60 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={headphone} alt="" className='absolute -top-20'/>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-60 h-60 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-60 h-60 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-60 h-60 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={watch} alt="" className='absolute top-20 w-40 left-10'/>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                        <h1 className='text-xs'>$28.00</h1>
                    </div>
                </div>

            <div>

            </div>

            <div className='flex gap-10 items-center justify-center'>
                <div className='bg-[#9ea2a0] h-60 w-1/2 relative flex overflow-hidden text-left'>
                    <img src={amanbag} alt="" className='absolute -top-20 right-20' />
                    <div className='absolute left-60 top-[70px] gap-[5px] grid'>
                        <h1 className='text-xs'>CAMELBACK</h1>
                        <h1 className='text-3xl font-bold'>Handbag</h1>
                        <a href="#" className='glass text-xs flex gap-[10px] items-center'>View collection <FaPlay /></a>
                    </div>
                </div>
    
                <div className='bg-[#f6a991] h-60 w-1/2 relative text-left'>
                    <img src={watchonfoam} alt="" className='absolute w-60 top-10' />
                    <div className='absolute left-60 top-[70px] gap-[5px]'>
                        <h1 className='text-xs'>ACCESSORIES</h1>
                        <h1 className='text-3xl font-bold'>Watches</h1>
                        <a href="#" className='glass text-xs flex gap-[10px] items-center'>View collection <FaPlay className='text-xs' /></a>
                    </div>
                </div>
            </div>
        </div>


        
        
        <div className='grid justify-center items-center text-center mt-60 gap-10  '>
            <div>
                <h1 className='font-bold text-2xl'>NEW PRODUCTS</h1>
                <h1>Nostrum aliquid, illo excepturi quisquam quae enim quia? Doloremque quo inventore iste libero?</h1>
            </div>
                <div className='flex justify-center items-center gap-2'>
                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-40 h-40 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        {/* <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1> */}
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-40 h-40 relative">
                            <h1 className='text-white absolute top-0 bg-black pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>-20%</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        {/* <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1> */}
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-40 h-40 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        {/* <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1> */}
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-40 h-40 relative">
                            <h1 className='text-white absolute top-0 bg-black pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>-5%</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        {/* <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1> */}
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-40 h-40 relative">
                            <h1 className='text-white absolute top-0 bg-blue-600 pl-3 pr-3 pt-1 pb-1 text-xs font-semibold'>NEW</h1>
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        {/* <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1> */}
                        <h1 className='text-xs'>$28.00</h1>
                    </div>

                   
                </div>

            <div>

            </div>

            <div className='flex gap-4 items-center justify-center w-full'>
                <div className='bg-[#D4D5D5] h-60 w-2/3 relative flex overflow-hidden text-left'>
                    <img src={leaf} alt="" className='absolute top-0 left-0 w-40' />
                    <div className='absolute left-60 top-[70px] gap-[15px] grid'>
                        <h1 className='text-1xl font-bold'>SIGN UP FOR OUR NEWSLETTER</h1>
                        <input type="email" placeholder='Your email address' className='p-3 bg-transparent border border-b-black-500 text-center' />
                        <a href="#" className='glass-black text-xs flex gap-[10px] items-center ml-auto mr-auto font-bold w-fit borl'>SUBSCRIBE </a>
                    </div>
                </div>
    
                <div className='bg-[#252626] h-60 w-1/3 text-left relative text-white'>
                    <a href="#" className=' bg-[#b71c1c] p-2 text-xs flex gap-[10px] items-center absolute top-2 right-2'>HURRY UP</a>
                    <div className='gap-[10px] grid mt-20 ml-5'>
                        <h1 className='text-1xl'>FREE SHIPPING</h1>
                        <h1 className='text-1xl'>ON ALL ORDER OF $100</h1>
                        <a href="#" className='pl-6 pr-6 pt-3 pb-3 border border-[#9ea2a0]-500 text-xs w-fit items-center'>LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>


        <div className='grid justify-center items-center text-center mt-20 gap-4 h-lvh'>
            <div>
                <h1 className='font-bold text-2xl'>FROM OUR BLOG</h1>
                <h1>Nostrum aliquid, illo excepturi quisquam quae enim quia? Doloremque quo inventore iste libero?</h1>
            </div>
                <div className='flex gap-4 flex-wrap'>
                    <div className="grid gap-2">
                        <div className="inner box grid bg-[#d9e3f0] w-60 h-60 relative">
                            <img src={headphone} alt="" className='absolute -top-20'/>
                        </div>
                        <div className='flex gap-10 text-xs'>
                            <h1 className='flex gap-2 items-center'><FaRegCalendarAlt /> Apr 12, 2024</h1>
                            <h1 className='flex gap-2 items-center'><IoMdPerson /> Demo Posthemes </h1>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                    </div>

                    <div className="grid gap-4 justify-center items-center text-center">
                        <div className="inner box grid bg-[rgb(217,227,240)] w-[500px] h-60 relative ">
                            <img src={bag} alt="" className='absolute top-0 w-40 '/>
                        </div>
                        <div className='flex gap-10 text-xs ml-auto mr-auto'>
                            <h1 className='flex gap-2 items-center'><FaRegCalendarAlt /> Apr 12, 2024</h1>
                            <h1 className='flex gap-2 items-center'><IoMdPerson /> Demo Posthemes </h1>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                    </div>

                    <div className="grid gap-2 ">
                        <div className="inner box grid bg-[#d9e3f0] w-60 h-60 relative">
                            <img src={bag} alt="" className='absolute top-10 '/>
                        </div>
                        <div className='flex gap-4 text-xs justify-center text-center items-center ml-auto mr-auto'>
                            <h1 className='flex gap-2 items-center'><FaRegCalendarAlt /> Apr 12, 2024</h1>
                            <h1 className='flex gap-2 items-center'><IoMdPerson /> Demo Posthemes </h1>
                        </div>
                        <h1 className='text-xs font-semibold'>TODAY IS A GOOD DAY FRAMED FOSTER</h1>
                    </div>

                </div>

            <div>

            </div>
        </div>


        <div className='bg-[#4d4d4d] w-full h-[1px]'></div>


        <div className='h-lvh'>

        </div>
    </div>
  )
}

export default Home
