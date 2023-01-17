import { useState, useEffect } from "react";
import axios from "axios";

//Import component
import Card from "./Card";

//Import data
import data from "../Data";

const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-32 my-16">
      <div className="flex justify-between my-6">
        <h1 className="font-semibold text-2xl">{type} products</h1>
        <p className=" w-4/6 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          rerum, cumque repellat harum distinctio ipsum, excepturi iste
          consequatur asperiores iure odit delectus qui ratione atque magnam
          expedita perspiciatis non accusantium.
        </p>
      </div>
      <div className="flex justify-center gap-10">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
