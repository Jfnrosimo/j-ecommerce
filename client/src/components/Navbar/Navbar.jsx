//Import UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

//Import routing
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="relative text-center">
              <ShoppingCartOutlinedIcon />
              <span className="absolute -top-3 -right-3 w-6 h-6 bg-blue-600 rounded-full text-zinc-100 text-sm font-semibold">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
