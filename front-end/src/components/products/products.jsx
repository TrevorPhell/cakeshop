import React from "react";
import Cakes from "../../data/products";

function CakeCard({ image, name, price, description }) {
  return (
    <div className="border rounded-lg shadow-md p-1  ">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-lg font-semibold">{price} Ksh</p>
        <button className="bg-pink-800 text-white rounded-lg px-4 py-2 mt-4 hover:bg-pink-600 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="grid grid-cols-3 gap-[40px] p-5">
      {Cakes.map((cake) => (
        <CakeCard
          key={cake.id}
          image={cake.image}
          name={cake.name}
          price={cake.price}
          description={cake.description}
        />
      ))}
    </div>
  );
}

export default Products;
