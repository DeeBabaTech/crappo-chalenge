import React from 'react';
import arrow from './../images/Arrow Right.svg'
import illustration from './../images/Illustration.png'
import illustrations from './../images/Illustrations.png'
import chart from './../images/Chart.png'
import table from './../images/Table.png'
import base from './../images/Base.png'
import icon from './../images/Icon.png'
import icon1 from './../images/Icon1.png'
import icon2 from './../images/Icon2.png'
import bitcoin from './../images/Bitcoin.png'
import visa from './../images/Visa.png'
import mastercard from './../images/Mastercard.png'
import socials from './../images/Socials.png'
import Card from './card'
import logo from '../images/Logo.png'
import './../animate.css'
import ScrollAnimation from 'react-animate-on-scroll'

function Body() {
    return (
        <>
            <div className='lg:flex items-center lg:mb-32 mb-20 w-[85%] m-auto mt-2 lg:mt-0'>
                <div className='lg:w-1/2'>
                    <div className='bg-slate-800 lg:text-base text-sm w-fit rounded-full mb-5 pr-3 pl-1 py-1'> <span className='bg-white text-slate-400 px-2 py-1 rounded-full mr-3 animate__animated animate__slower animate__zoomIn'> 70% save </span> For the best black friday deals</div>
                    <h1 className='lg:text-6xl text-[2rem] leading-10 font-bold mb-5 animate__animated animate__slower animate__fadeInUp'>Fastest & Secure Platform To Invest In Crypto</h1>
                    <div className='lg:w-9/12 mb-5 animate__animated animate__slower animate__fadeInUp'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</div>
                    <div className='lg:p-5 p-4 rounded-full bg-blue-700 w-fit flex items-center animate__animated animate__slower animate__fadeInDown'> Try for FREE  <img src={arrow} className='w-7 ml-2 animate__animated animate__slower animate__fadeInLeft' alt="" /> </div>
                </div>
                <img src={illustration} className='lg:w-1/2 mt-10 lg:mt-0 animate__animated animate__slower animate__zoomIn' alt='' />
            </div>

            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut='zoomOut'
              duration={4}
              delay={0}
            >
                <div className='lg:flex items-center mb-10 lg:mb-5 justify-between w-[85%] m-auto'>
                    <div className='flex items-center mb-5 lg:mb-0'>
                        <img src={icon} className='mr-4' alt='' />
                        <div> 
                            <h1 className='text-2xl font-semibold mb-1'> $30B </h1> 
                            <p className='text-slate-400'> Digital Currency Exchanged </p> 
                        </div>
                    </div>
                    <div className='flex items-center mb-5 lg:mb-0'>
                        <img src={icon1} className='mr-4' alt='' />
                        <div> 
                            <h1 className='text-2xl font-semibold mb-1'> 10M+ </h1> 
                            <p className='text-slate-400'> Trusted Wallets Investor </p> 
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={icon2} className='mr-4' alt='' />
                        <div> 
                            <h1 className='text-2xl font-semibold mb-1'> 195 </h1> 
                            <p className='text-slate-400'> Countries Supported </p> 
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            <div className='lg:flex flex-row-reverse justify-between items-center lg:mb-32 mb-10 w-[85%] m-auto'>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  duration={3}
                  delay={0}
                >
                    <div className='mt-20 ml-0 lg:ml-16'>
                        <h1 className='lg:text-5xl text-4xl lg:leading-[4rem] font-bold mb-5'>Why you should choose CHAPPO</h1>
                        <div className='mb-5 lg:w-9/12'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</div>
                        <div className='px-5 py-3 rounded-full bg-blue-700 w-fit flex items-center'> Learn More </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="zoomIn"
                  duration={5}
                  delay={0}
                >
                    <img src={illustrations} className='' alt='' />
                </ScrollAnimation>
            </div>
            
            <ScrollAnimation
                  animateIn="fadeInUp"
                  duration={3}
                  delay={0}
                >
                <div className='text-center w-[85%] m-auto'>
                    <div className='lg:text-4xl text-3xl font-bold mb-5'> Check how much you can earn </div>
                    <div className='mb-10 lg:w-5/12 m-auto'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</div>
                    <div className='text-slate-900 rounded-t-xl lg:w-[80%] m-auto lg:text-xl text-lg bg-white lg:p-10 py-5 px-7 lg:flex justify-between'>
                        <input type='text' placeholder='Enter your hash rate' className='mb-5 lg:mb-0 border-b-2 lg:w-72 w-[100%] outline-none lg:py-1 py-5 placeholder:text-slate-900 lg:placeholder:text-xl'/>
                        <select className='lg:w-36 w-[100%] lg:py-1 py-5 border-b-2 mb-10 lg:mb-0'>
                          <option>TH/s</option>
                          <option>H/s</option>
                          <option>KH/s</option>
                          <option>MH/s</option>
                          <option>GH/s</option>
                        </select>
                        <div className='px-5 py-3 rounded-full text-white bg-blue-700 w-fit flex items-center'> Calculate </div>
                    </div>
                </div>
            </ScrollAnimation>

            <div className='bg-white text-slate-900'>
            <ScrollAnimation
                  animateIn="fadeInUp"
                  duration={4}
                  delay={0}
                >
                <div className='lg:w-[68%] w-[85%] m-auto lg:p-10 py-5 px-7 bg-white rounded-b-xl shadow-2xl mb-20'>
                    <div className='text-blue-600 mb-3 font-semibold'>ESTIMATED 24 HOUR REVENUE:</div>
                    <div className='lg:mb-1 mb-2 font-bold text-2xl'>0.055 130 59 ETH <span className='text-blue-600'>($1275) </span></div>
                    <div className='text-slate-700'>Revenue will change based on mining difficulty and Ethereum price.</div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                  animateIn="zoomIn"
                  duration={4}
                  delay={0}
                >
                <div className='lg:text-4xl text-2xl lg:leading-[3rem] lead font-bold mb-14 lg:w-[50%] w-[85%] m-auto text-center'>Trade securely and market the high growth cryptocurrencies.</div>
            </ScrollAnimation>
                <div className='w-[85%] m-auto pb-14'>
                    <Card />
                </div>
            </div>
            
            <div className='bg-[#2B076E] lg:py-20 py-10'>
            <ScrollAnimation
                  animateIn="zoomIn"
                  duration={4}
                  delay={0}
                >
                <div className='lg:text-4xl text-2xl lg:leading-[3rem] font-bold lg:w-[50%] m-auto text-center'>Market sentiments, portfolio, and run the infrastructure of your choice</div>
            </ScrollAnimation>
            <ScrollAnimation
                  animateIn="zoomIn"
                  duration={4}
                  delay={0}
                >
                <div className='lg:flex justify-between items-center lg:mb-32 mb-10 w-[85%] m-auto lg:mt-24 mt-10'>
                    <div className='lg:w-1/2'>
                        <h1 className='lg:text-4xl text-2xl font-bold lg:mb-5 mb-2'>Invest Smart</h1>
                        <div className='mb-5 lg:w-9/12'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </div>
                        <div className='px-5 py-3 rounded-full bg-blue-700 w-fit flex items-center'> Learn More </div>
                    </div>
                    <img src={chart} className='lg:w-1/2 mt-10 lg:mt-0' alt='chart' />
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                  animateIn="zoomIn"
                  duration={4}
                  delay={0}
                >
                <div className='lg:flex flex-row-reverse lg:w-[90%] w-[85%] m-auto lg:m-0 justify-between items-center lg:mb-32 mb-10 lg:mt-24'>
                    <div className='lg:ml-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold lg:mb-5 mb-2'>Detailed Statistics</h1>
                        <div className='mb-5'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</div>
                        <div className='px-5 py-3 rounded-full bg-blue-700 w-fit flex items-center'> Learn More </div>
                    </div>
                    <img src={base} className='lg:w-[55%] mt-10 lg:mt-0' alt='base' />
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                  animateIn="zoomIn"
                  duration={4}
                  delay={0}
                >
                <div className='lg:flex justify-between items-center w-[85%] m-auto lg:mt-24'>
                    <div className='lg:w-1/2'>
                        <h1 className='lg:text-3xl text-2xl font-bold lg:mb-5 mb-2'>Grow your profit and track your investments</h1>
                        <div className='mb-5 lg:w-10/12'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</div>
                        <div className='px-5 py-3 rounded-full bg-blue-700 w-fit flex items-center'> Learn More </div>
                    </div>
                    <img src={table} className='lg:w-3/5 mt-10 lg:mt-0' alt='table' />
                </div>
            </ScrollAnimation>
            </div>
            

            <div className='bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] lg:py-20 py-5'>
                <div className='lg:flex justify-between items-center bg-[#3671E9] rounded-xl w-[85%] h-fit m-auto lg:p-16 p-5'>
                    <div className='lg:w-1/3'>
                        <div className='lg:text-3xl text-2xl font-bold lg:mb-5 mb-2'>Start mining now</div>
                        <div>Join now with CRAPPO to get the latest news and start mining now</div>
                    </div>
                    <div className='lg:flex mt-5 lg:mt-0'>
                        <input type='text' placeholder='Enter your hash rate' className='border-b-2 lg:w-72 mb-5 lg:mb-0 w-[100%] bg-inherit outline-none py-1 placeholder:text-white mr-7 lg:placeholder:text-xl'/>
                        <div className='px-5 py-3 rounded-full m-auto text-blue-700 bg-white w-fit flex items-center'> Subscribe </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-between w-[85%] m-auto py-16'>
                <div className="flex items-center lg:items-start m-auto lg:m-0 w-fit text-xl">
                  <div> <img src={logo} alt="logo" className="lg:mr-5 mr-2"/> </div>
                  <a href="index.js"> CRAPPO </a>
                </div> 
                <div className="flex flex-col text-center lg:text-start mt-10 lg:mt-0">
                  <div className='font-bold text-lg mb-5'> Quick Link </div>
                  <div className='mb-3'> Home </div>
                  <div className='mb-3'> Products </div>
                  <div className='mb-3'> About </div>
                  <div className='mb-3'> Features </div>
                  <div className='mb-3'> Contact </div>
                </div> 
                <div className="flex flex-col text-center lg:text-start mt-5 lg:mt-0">
                  <div className='font-bold text-lg mb-5'> Resources </div>
                  <div className='mb-3'> Download Whitepapper </div>
                  <div className='mb-3'> Smart Token </div>
                  <div className='mb-3'> Blockchan Explorer </div>
                  <div className='mb-3'> Crypto API </div>
                  <div className='mb-3'> Interest </div>
                </div> 
                <div className='lg:w-80 mt-10 lg:mt-0 text-center lg:text-start'>
                    <div className='lg:text-3xl text-xl font-semibold lg:mb-10 mb-5'>We accept following payment systems</div>
                    <div className='flex justify-between'>
                        <img src={visa} alt='visa'/>
                        <img src={mastercard} alt='mastercard'/>
                        <img src={bitcoin} alt='bitcoin'/>
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-between content-center pb-10 w-[85%] m-auto'>
                <div className='text-center mb-3 lg:mb-0'>©2021 CRAPPO. All rights reserved</div>
                <div className='flex justify-center'>
                    <img src={socials} alt='socials' />
                </div>
            </div>
        </>
    );
}

export default Body;