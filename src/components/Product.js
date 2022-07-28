import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import CurrencyFormat from 'react-currency-format'

const MAX_RATING = 5;
const MIN_RATING = 1;

export const Product = ({ id, title, description, price, category, image }) => {

  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5)

  return (
    <div className='p-10 m-5 bg-white flex flex-col relative z-30'>
      <p className='items-end mb-8 absolute top-3 right-3 italic text-gray-400'>{category}</p>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        objectFit='contain'
    
        
      />
      <h4 className='mt-8 font-bold'>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map((_, i) => {
          return (
            <StarIcon className='h-5 mt-2 text-yellow-500' />
          )
        })}
      </div>

      <p className='mt-4 text-xs line-clamp-2'>{description}</p>
      <div>
        <CurrencyFormat
          value={price}
          thousandSeparator={true}
          prefix={'$'}
          className='font-bold text-xl mt-2'
        />
      </div>
    
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img className='w-14' src="https://links.papareact.com/fdw" alt="img" />
            <p className='text-xs text-gray-500 ml-2'>FREE Next-day Delivery</p>
          </div>
        ) }

        <button 
          className='mt-auto button'
        >Add to Basket</button>
    </div>
  )
}
