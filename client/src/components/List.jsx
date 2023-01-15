//Import data
import data from "../Data";

//Import component
import Card from "./Card";

const List = () => {
  return (
    <div className="flex justify-between gap-10 flex-wrap">
      {data?.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
