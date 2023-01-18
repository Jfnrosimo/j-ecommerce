import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//Import components
import List from "../components/List";

const Products = () => {
  const categoryId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  const handleCatChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(isChecked);
    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

  return (
    <div className="px-10 pt-5 flex gap-40 w-full h-[90vh] justify-center">
      <div className=" w-1/5 sticky h-1/2 top-20">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Product Categories</h2>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <input
                  className="mx-1"
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleCatChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            );
          })}
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
