import useFetch from "../hooks/useFetch";

//Import component
import Card from "./Card";

const List = () => {
  const { data, loading, error } = useFetch();
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
