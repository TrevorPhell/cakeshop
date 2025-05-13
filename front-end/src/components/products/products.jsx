import React from 'react'
import Cakes from '../../data/products'

function CakeCard({ image, name, price, description }) {
  return (
    <div className="border rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-lg font-semibold">{price} Ksh</p>
      </div>
    </div>
  )
}

function Products() {
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {Cakes.map(cake => (
        <CakeCard
          key={cake.id}
          image={cake.image}
          name={cake.name}
          price={cake.price}
          description={cake.description}
        />
      ))}
    </div>
  )
}

export default Products
