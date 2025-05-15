import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
  <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <>
            <div key={item.id} className="flex items-center border-b py-2">
              <div className="flex flex-row gap-9">
                <div>
                  <img
                    src={item.image}
                    alt="Cake Image"
                    className="h-[50px] mr-2.5"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              
              </div><p className="font-semibold absolute right-20">
                  {item.price * item.quantity} Ksh
              </p> 
            </div>
              </>
          ))}
          <div className="mt-4 text-xl font-bold">Total: {total} Ksh</div>
        </>
      )}
    </div>
  </>
  );
}

export default Cart;
