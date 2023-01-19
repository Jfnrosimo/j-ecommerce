//Redux
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

//Import UI
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = products.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return total.toFixed(2);
  };

  return (
    <div className=" min-h-0 w-1/4 absolute right-8 z-40 p-3 flex flex-col gap-2 shadow-md bg-zinc-100">
      <h1 className="text-lg ">Products in your cart</h1>
      {products?.map((item) => (
        <div className="flex gap-1 justify-between" key={item.id}>
          <div className="flex gap-1">
            <img
              className=" w-20 h-28"
              src={process.env.REACT_APP_UPLOAD_URL + item.img}
              alt=""
            />
            <div>
              <h2 className="">title</h2>
              <p className="text-xs">{item.desc.substring(0, 100)}</p>
              <span>
                {item.quantity} x ₱{item.price}
              </span>
            </div>
          </div>
          <DeleteOutlinedIcon
            className="text-red-400"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between font-semibold">
        <span>SUBTOTAL</span>
        <span>₱{totalPrice()}</span>
      </div>
      <button className="w-56 flex gap-2 justify-center self-center text-sm py-1 bg-blue-500 text-zinc-200">
        PROCEED TO CHECKOUT
      </button>
      <button
        className="text-red-400 w-1/4"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
