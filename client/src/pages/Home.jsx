import React from "react"
import { useEffect, useState } from 'react'

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
    <div className='home'>
      <div className="stock p-20">
        {
          stocks && stocks.map((stock) => (
            <p key={stock._id}> {stock.name} </p>
          ))
        }
      </div>
    </div>
  )
}

export default Home
