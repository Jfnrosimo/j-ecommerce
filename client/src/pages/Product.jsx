import React, { useState } from "react";

//Import UI
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/14940470/pexels-photo-14940470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14940471/pexels-photo-14940471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="w-full h-[90vh] px-10 py-5 gap-5 flex">
      <div className="w-1/2 h-full flex gap-4">
        <div className="w-1/5 h-full gap-1 flex flex-col">
          <img
            className="hover:cursor-pointer"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            className="hover:cursor-pointer"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImage(1)}
          />
        </div>
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={images[selectedImage]}
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Title</h2>
        <span className="text-lg text-blue-500">₱300</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          voluptas! Consequatur, cupiditate itaque doloremque reiciendis earum
          neque ea illo quam molestiae aliquam, suscipit omnis nihil vitae
          inventore eum molestias error.
        </p>
        <div className="flex items-center">
          <button
            className="w-10 h-10 bg-gray-200"
            onClick={() => (quantity > 1 ? setQuantity((prev) => prev - 1) : 1)}
          >
            -
          </button>
          <p className="px-2">{quantity}</p>
          <button
            className="w-10 h-10 bg-gray-200"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className=" w-56 flex gap-2 justify-center text-sm py-1 bg-blue-500 text-zinc-200">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="flex gap-4">
          <button className=" text-blue-500 px-3 text-sm">
            <FavoriteBorderIcon className="mx-3" /> ADD TO WISHLIST
          </button>
          <button className=" text-blue-500 px-3 text-sm">
            <BalanceIcon className="mx-3" /> ADD TO COMPARE
          </button>
        </div>
        <div className="mt-10">
          <p>Vendor: Polo</p>
          <p>Product Type: T-Shirt</p>
          <p>Tag: T-shirt, Men</p>
        </div>
        <div className=" h-0.5 bg-slate-400"></div>
        <div className="">
          <button className="block my-2 shadow  px-2">DESCRIPTION</button>
          <button className="block my-2 shadow px-2">
            ADDITIONAL INFORMATION
          </button>
          <button className="block my-2 shadow px-2">FAQ</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
