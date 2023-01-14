//Routing
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="flex flex-col gap-2">
        <div className="w-full h-72  overflow-hidden">
          <img className="w-full h-full object-cover" src={item.img} alt="" />
          <img
            className="w-full h-full object-cover hover:-z-10"
            src={item.img2}
            alt=""
          />
        </div>
        <h2>{item.title}</h2>
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
    </Link>
  );
};

export default Card;
