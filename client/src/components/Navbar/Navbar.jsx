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
    <div>
      <div>
        <div>
          <div>
            <img src="/img/en.png" alt="language" /> <KeyboardArrowDownIcon />
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
        <div>
          <Link to="/">JEcom</Link>
        </div>
        <div>
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
          <div>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
