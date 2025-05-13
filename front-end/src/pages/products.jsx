import React from 'react'
import ProductsData from '../components/products/products'

function Products() {
  return (
    <div className=''>
      {/* <div className='bg-white shadow-lg rounded-lg p-5'>
        <h2 className='text-xl font-bold'>Chocolate Cake</h2>
        <p className='text-gray-700'>Rich and moist chocolate cake with creamy frosting.</p>
        <p className='text-lg font-semibold'>2000 Ksh</p>
      </div>
      <div className='bg-white shadow-lg rounded-lg p-5'>
        <h2 className='text-xl font-bold'>Vanilla Cake</h2>
        <p className='text-gray-700'>Classic vanilla cake with a light and fluffy texture.</p>
        <p className='text-lg font-semibold'>2500 Ksh</p>
      </div>
      <div className='bg-white shadow-lg rounded-lg p-5'>
        <h2 className='text-xl font-bold'>Red Velvet Cake</h2>
        <p className='text-gray-700'>Delicious red velvet cake with cream cheese frosting.</p>
        <p className='text-lg font-semibold'>1800 Ksh</p>
      </div> */}
      <ProductsData />
    </div>
  )
}

export default Products
