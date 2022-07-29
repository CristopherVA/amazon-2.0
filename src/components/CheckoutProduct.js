import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

export const CheckoutProduct = ({ id, title, description, price, category, image, rating, hasPrime }) => {

   const dispatch = useDispatch()

   const addItemToBasket = () => {
      const product = {
         id, title, description, price, category, image, rating, hasPrime
      }
      dispatch(addToBasket(product))
   }

   const removeItemToBasket = () => {
      dispatch(removeFromBasket({ id }))
   }

   return (
      <div className='grid grid-cols-5'>
         <Image src={image} width={200} height={200} objectFit='contain' />
         <div className='col-span-3 mx-5'>
            {title}
            <div className='flex'>
               {Array(rating).fill().map((_, i) => (
                  <StarIcon className='text-yellow-500  h-5' />
               ))}
            </div>
            <p className='text-xs my2 line-clamp-3'>{description}</p>

            <CurrencyFormat value={price * 3} prefix={'$'} />

            {hasPrime && (
               <div className='flex items-center space-x-2'>
                  <img className='w-14' src="https://links.papareact.com/fdw" alt="img" />
                  <p className='text-xs text-gray-500 ml-2'>FREE Next-day Delivery</p>
               </div>
            )}


         </div>
         <div className='flex flex-col space-y-2 justify-self-end mt-auto'>
            <button onClick={addItemToBasket} className='button mt-auto'>Add to Basket</button>
            <button onClick={removeItemToBasket} className='button mt-auto'>Remove to Basket Item</button>
         </div>
      </div>
   )
}
