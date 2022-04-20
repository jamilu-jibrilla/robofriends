import Card from "./Card";

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
