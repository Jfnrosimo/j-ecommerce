//Import hooks
import { useState } from "react";

//Routing
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link className="w-1/6" to={`/product/${item.id}`}>
      <div className="flex flex-col gap-2">
        <div
          className="w-full h-72  overflow-hidden relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {item.attributes.isNew && (
            <span className="z-30 absolute top-2 left-1 bg-slate-100 text-teal-700 px-0.5 text-sm bg-opacity-90">
              New Season
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute z-10"
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
          <img
            className={`w-full h-full object-cover absolute ${
              hover ? "z-20" : null
            }`}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="flex gap-3">
          <h3 className=" opacity-60 line-through">
            ₱{item.attributes.price + 70}
          </h3>
          <h3>₱{item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
