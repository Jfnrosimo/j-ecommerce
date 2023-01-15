//Import data
import data from "../Data";

//Import component
import Card from "./Card";

const List = () => {
  return (
    <div>
      {data?.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
