import React, { useState } from 'react'
import arrow from './../images/Arrow Right.svg'
import bit from './../images/Bit.png'
import eth from './../images/Eth.png'
import lit from './../images/Lec.png'

function Card() {
    const value = <img src={arrow} className='w-12 outline outline-1 outline-slate-500 rounded-full' alt="" />
    const secValue = <div className='p-5 rounded-full text-white bg-blue-700 w-fit flex items-center'> Start Mining <img src={arrow} className='w-7 ml-2 bg-blue-700' alt="" /> </div>

    const [bg1, setBg1] = useState (true);
    const [bg2, setBg2] = useState (false);
    const [bg3, setBg3] = useState (false);

    const [bottom1, setBottom1] = useState (true);
    const [bottom2, setBottom2] = useState (false);
    const [bottom3, setBottom3] = useState (false);

    const changeBg1 = () => {
        setBg1(true);
        setBottom1(true);
        setBg2(false);
        setBottom2(false);
        setBg3(false);
        setBottom3(false);
    }

    const changeBg2 = () => {
        setBg2(true);
        setBottom2(true);
        setBg1(false);
        setBottom1(false);
        setBg3(false);
        setBottom3(false);
    }

    const changeBg3 = () => {
        setBg3(true);
        setBottom3(true);
        setBg1(false);
        setBottom1(false);
        setBg2(false);
        setBottom2(false);
    }

  return (
    <div className='lg:flex justify-between'>
        <div onClick={changeBg1}
            style={{
            backgroundColor: bg1 ? '#2B076E' : '',
            color: bg1 ? 'white' : '' ,
        }}  className='flex flex-col justify-center items-center lg:w-[30%] px-8 py-10 rounded-xl'>
            <img src={bit} className='w-14 mb-10' alt=''/>
            <h1 className='text-xl relative font-bold after:content-["BTC"] after:font-normal after:text-slate-500 after:text-sm after:absolute after:top-1 after:-right-8'>Bitcoin</h1>
            <div className='text-center my-7'>Digital currency in which a record of transactions is maintained.</div>
            <div>{bottom1 ? secValue : value }</div>
        </div>

        <div onClick={changeBg2}
            style={{
            backgroundColor: bg2 ? '#2B076E' : '',
            color: bg2 ? 'white' : '' ,
        }}  className='flex flex-col justify-center items-center lg:w-[30%] px-8 py-10 rounded-xl'>
            <img src={eth} className='w-14 mb-10' alt=''/>
            <h1 className='text-xl relative font-bold after:content-["ETH"] after:font-normal after:text-slate-500 after:text-sm after:absolute after:top-1 after:-right-8'>Ethereum</h1>
            <div className='text-center my-7'>Blockchain technology to create and run decentralized digital applications.</div>
            <div>{bottom2 ? secValue : value }</div>
        </div>

        <div onClick={changeBg3}
            style={{
            backgroundColor: bg3 ? '#2B076E' : '',
            color: bg3 ? 'white' : '' ,
        }}  className='flex flex-col justify-center items-center lg:w-[30%] px-8 py-10 rounded-xl'>
            <img src={lit} className='w-14 mb-10' alt=''/>
            <h1 className='text-xl relative font-bold after:content-["LTC"] after:font-normal after:text-slate-500 after:text-sm after:absolute after:top-1 after:-right-8'>Litecoin</h1>
            <div className='text-center my-7'>Cryptocurrency that enables instant payments to anyone in the world.</div>
            <div>{bottom3 ? secValue : value }</div>
        </div>
    </div>
  )
}

export default Card