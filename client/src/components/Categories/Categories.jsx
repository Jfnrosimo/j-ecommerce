import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mx-32 h-[80vh] flex gap-2">
      <div className="flex w-1/2 gap-2 h-full">
        <div className="flex flex-col gap-2">
          <div className="relative h-1/2">
            <img
              className="object-cover h-full w-full"
              src="https://images.pexels.com/photos/12189048/pexels-photo-12189048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="shoes"
            />
            <Link className="absolute" to="">
              WOMEN
            </Link>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5585841/pexels-photo-5585841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="shoes"
            />
            <Link to="">SALE</Link>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2923157/pexels-photo-2923157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link to="/">NEW SEASON</Link>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex">
          <div>
            <img
              src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Link>MEN</Link>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Link>ACCESSORIES</Link>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="shoes"
          />
          <Link>Shoes</Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
