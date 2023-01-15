import { useParams } from "react-router-dom";

//Import components
import List from "../components/List";

const Products = () => {
  const id = parseInt(useParams().id);

  return (
    <div className="">
      <div>
        <div>
          <h2>Product Categories</h2>
          <div>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div>
          <h2>Filter by price</h2>
          <div>
            <span>0</span>
            <input type="range" min={0} max={1000} />
            <span>1000</span>
          </div>
        </div>
        <div>
          <h2>Sort by</h2>
          <div>
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div>
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/341392/pexels-photo-341392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="products background"
        />
        <List />
      </div>
    </div>
  );
};

export default Products;
