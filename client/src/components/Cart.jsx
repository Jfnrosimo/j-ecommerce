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
  ];
  return (
    <div>
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div>
          <img src={item.img} alt="" />
          <div>
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <span>1 x ₱{item.price}</span>
          </div>
          <DeleteOutlinedIcon />
        </div>
      ))}
      <div>
        <span>SUBTOTAL</span>
        <span>₱100</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span>Reset Cart</span>
    </div>
  );
};

export default Cart;
