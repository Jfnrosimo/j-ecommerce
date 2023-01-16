//Import UI
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati itaque eius blanditiis aliquid expedita dolorem ullam est quidem, suscipit esse.",
      isNew: true,
      oldPrice: 250,
      price: 200,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati itaque eius blanditiis aliquid expedita dolorem ullam est quidem, suscipit esse.",
      isNew: true,
      oldPrice: 250,
      price: 200,
    },
  ];
  return (
    <div className=" min-h-0 w-1/4 absolute right-8 z-40 p-3 flex flex-col gap-2 shadow-md bg-zinc-100">
      <h1 className="text-lg ">Products in your cart</h1>
      {data?.map((item) => (
        <div className="flex gap-1">
          <img className=" w-20 h-28" src={item.img} alt="" />
          <div>
            <h2 className="">{item.title}</h2>
            <p className="text-xs">{item.desc.substring(0, 100)}</p>
            <span>1 x ₱{item.price}</span>
          </div>
          <DeleteOutlinedIcon className="text-red-400" />
        </div>
      ))}
      <div className="flex justify-between font-semibold">
        <span>SUBTOTAL</span>
        <span>₱100</span>
      </div>
      <button className="w-56 flex gap-2 justify-center self-center text-sm py-1 bg-blue-500 text-zinc-200">
        PROCEED TO CHECKOUT
      </button>
      <button className="text-red-400 w-1/4">Reset Cart</button>
    </div>
  );
};

export default Cart;
