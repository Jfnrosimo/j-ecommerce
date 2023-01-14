//Import hooks
import { useState } from "react";

//Routing
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={`/product/${item.id}`}>
      <div className="flex flex-col gap-2">
        <div
          className="w-full h-72  overflow-hidden relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {item.isNew && (
            <span className="z-30 absolute top-2 left-1 bg-slate-100 text-teal-700 px-0.5 text-sm bg-opacity-90">
              New Season
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute z-10"
            src={item.img}
            alt=""
          />
          <img
            className={`w-full h-full object-cover absolute ${
              hover ? "z-20" : null
            }`}
            src={item.img2}
            alt=""
          />
        </div>
        <h2>{item.title}</h2>
        <div className="flex gap-3">
          <h3 className=" opacity-60 line-through">₱{item.oldPrice}</h3>
          <h3>₱{item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
