import { useState } from "react";
import { useSelector } from "react-redux";

//Import UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

//Import routing
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="h-auto">
      <div className="flex justify-between items-center px-5 py-2">
        <div className="flex gap-3">
          <div>
            <img className="inline-block" src="/img/en.png" alt="language" />
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <Link to="/products/1">Women</Link>
          </div>
          <div>
            <Link to="/products/2">Men</Link>
          </div>
          <div>
            <Link to="/products/3">Children</Link>
          </div>
          <div>
            <Link to="/products/4">Accessories</Link>
          </div>
        </div>
        <div className="text-4xl">
          <Link to="/">JEcom</Link>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">Contacts</Link>
          </div>
          <div>
            <Link to="/">Stores</Link>
          </div>
          <div className="flex gap-2 items-center">
            <SearchIcon className=" cursor-pointer" />
            <PersonOutlineOutlinedIcon className=" cursor-pointer" />
            <FavoriteBorderOutlinedIcon className=" cursor-pointer" />
            <div className="relative text-center">
              <ShoppingCartOutlinedIcon
                className=" cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              />
              <span className="absolute -top-3 -right-3 w-6 h-6 bg-blue-600 rounded-full text-zinc-100 text-sm font-semibold">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <Cart />}
    </div>
  );
};

export default Navbar;
