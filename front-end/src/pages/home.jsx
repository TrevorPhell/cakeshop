import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [menu, setmenu] = useState("products");

  return (
    <div className="bg-[url(https://i.ibb.co/7NNZNVs1/american-heritage-chocolate-cake.jpg)] min-h-screen bg-cover bg-no-repeat  flex flex-col items-center">
      <div className="text-black text-right absolute right-10 top-80 backdrop-blur-xl p-[30px] rounded-3xl text-xl bg-amber-300 ">
        <h1 className="text-3xl font-bold mb-2.5 ">
          Welcome to The <strong>Number 1</strong> Cake Shop in Town!
        </h1>
        <p className="m-2.5 text-xl">
          Where sweetness meets tradition — delighting taste buds since{" "}
          <strong>1978</strong>.
        </p>
        <p>
          From custom birthday cakes to rich wedding treats, we craft every
          dessert with love and passion.
        </p>
        <p>
          Visit us today and experience why generations trust us for life's
          sweetest moments!
        </p>
      </div>
      <div className="absolute bottom-10 flex gap-5">
        <Link
          to="/products"
          onClick={() => {
            setmenu("products");
          }}
        >
          <button className="bg-pink-800 rounded-2xl p-5 text-white cursor-pointer hover:bg-pink-600 duration-200 hover:scale-105 ">
            See our Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
