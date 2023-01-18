import useFetch from "../hooks/useFetch";

//Import component
import Card from "./Card";

const List = ({ selectedSubCat, maxPrice, sort, categoryId }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${categoryId}${selectedSubCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="flex justify-between gap-10 flex-wrap">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data?.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
    </div>
  );
};

export default List;
