import React from 'react'
import Image from 'next/image'
import {
   MenuIcon,
   SearchIcon,
   ShoppingCartIcon
} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"

export const Header = () => {

   const {data: session} = useSession()

   return (
      <div>
         <header>
            {/* Top nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
               <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                  <Image
                     src='https://links.papareact.com/f90'
                     width={150} 
                     height={40}
                     objectFit='contain'
                     className='cursor-pointer'
                  />
               </div>

               {/* Search */}
               <div className='hidden sm:flex h-10 items-center rounded-md flex-grow bg-yellow-400 cursor-pointer transition-all duration-200 hover:bg-yellow-500'>
                  <input
                     className='p-2 h-full flex-grow flex-shrink rounded-l-md w-6 outline-none border-none '
                     type="text"
                     placeholder='Search....'
                  />
                  <SearchIcon className='h-12 p-4' />
               </div>

               {/* Rigth Section */}
               <div className='text-white flex'>
                  <div
                     onClick={ !session ? signIn : signOut }
                     className='mx-4 cursor-pointer hover:underline'
                  >
                     <p>
                        {session ? `Hello, ${session.user.name}` : 'Sign In'}
                     </p>
                     <p className='font-extrabold md:text-sm'>Account & List</p>
                  </div>

                  <div className='mx-2 cursor-pointer hover:underline'>
                     <p>Return</p>
                     <p className='font-extrabold md:text-sm'>& Order</p>
                  </div>

                  <div className='mx-4 cursor-pointer hover:underline relative flex items-center'>
                     <div className=' text-amazon_blue absolute top-0 left-8 w-4 h-4 p-2 flex items-center justify-center bg-yellow-400 rounded-full'>
                        2
                     </div>
                     <ShoppingCartIcon className='h-10' />
                     <p className='hidden md:inline text-sm font-extrabold md:text-sm'>Basket</p>
                  </div>

               </div>
            </div>
            { /* Botton nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
               <p className='flex items-center cursor-pointer '>
                  <MenuIcon className='h-6 mr-1' />
                  All
               </p>
               <p className='cursor-pointer hover:underline'>Prime Video</p>
               <p className='cursor-pointer hover:underline'>Amazon Bussness</p>
               <p className='cursor-pointer hover:underline'>Today`s Deals</p>
               <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Electronics</p>
               <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Food & Grocery</p>
               <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Primer</p>
               <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Buy Again</p>
               <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Shopper Toolkit</p>
               <p className='cursor-pointer hover:underline hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
            <div>

            </div>
         </header>

      </div>
   )
}
