import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 250,
      price: 200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14529762/pexels-photo-14529762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/14577737/pexels-photo-14577737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 190,
      price: 120,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      isNew: false,
      oldPrice: 300,
      price: 220,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-shirt",
      isNew: false,
      oldPrice: 290,
      price: 220,
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
