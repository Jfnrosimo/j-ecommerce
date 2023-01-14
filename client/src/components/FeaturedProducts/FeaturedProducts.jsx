import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "www.google.com",
      img2: "www.google.com",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "www.google.com",
      img2: "www.google.com",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "www.google.com",
      img2: "www.google.com",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "www.google.com",
      img2: "www.google.com",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

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
