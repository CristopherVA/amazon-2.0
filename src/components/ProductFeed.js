import React from 'react'
import { Product } from './Product'

export const ProductFeed = ({ products }) => {
   return (
      <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 relative top-[-150px] z-50' >

         {products.slice(0, 4).map(({ id, title, description, price, category, image, rating }) => (
            <Product
               key={id}
               id={id}
               title={title}
               description={description}
               price={price}
               category={category}
               image={image}
               rating={rating}
            />
         ))}

         <img src="https://links.papareact.com/dyz" alt="banner" className='md:col-span-full' />

         <div className='md:col-span-2'>
            {products.slice(4, 5).map(({ id, title, description, price, category, image, rating }) => (
               <Product
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  image={image}
                  rating={rating}
               />
            ))}

         </div>

         <div className='md:col-span-2'>
            {products.slice(5, 6).map(({ id, title, description, price, category, image, rating }) => (
               <Product
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  image={image}
                  rating={rating}
               />
            ))}

         </div>

         {products.slice(6, products.length).map(({ id, title, description, price, category, image, rating }) => (
               <Product
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  image={image}
                  rating={rating}
               />
            ))}
      </div>
   )
}
