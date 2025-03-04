import React from "react"
import { useEffect, useState } from 'react'

// Components
import Navbar from "../components/Navbar"

// Images
import HeroImg from '../assets/img1.png'


const Home = () => {

  const [stocks, setStocks] = useState(null)

  useEffect(() => {
    const fetchStock = async () => {
      const response = await fetch('/api/stock')
      const json = await response.json()

      if(response.ok) {
        setStocks(json)
      }
    }

    fetchStock()
  }, [])

  return (
    <div className='w-full h-screen relative mx-auto'>
      <Navbar />
      <img className="w-full h-full object-cover" src={HeroImg} />
      <div className='w-[600px] h-auto absolute place-items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <h1 className="text-6xl font-extrabold">Interior Elegance</h1>
        <p className="mt-4 mb-8">
          lorem dniiind jnsvsj jsjuns bkis jdbnn skaiiidbms jdj
        </p>
        <button className='w-[auto] py-2 px-4 text-white px-auto bg-black cursor-pointer rounded-lg'>Explore</button>
      </div>
    </div>
  )
}

export default Home
