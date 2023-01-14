//Routing
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div>Card</div>
    </Link>
  );
};

export default Card;
