import { useState } from "react";
import { useParams } from "react-router-dom";

//Import components
import List from "../components/List";

const Products = () => {
  const categoryId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="px-10 pt-5 flex gap-40 w-full h-[90vh] justify-center">
      <div className=" w-1/5 sticky h-1/2 top-20">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Product Categories</h2>
          <div>
            <input className="mx-1" type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div>
            <input className="mx-1" type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div>
            <input className="mx-1" type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Filter by price</h2>
          <div>
            <span className="mx-1">0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span className="mx-1">{maxPrice}</span>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Sort by</h2>
          <div>
            <input
              className="mx-1"
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div>
            <input
              className="mx-1"
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className=" h-[35%] w-full flex flex-col gap-10">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/341392/pexels-photo-341392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="products background"
        />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
