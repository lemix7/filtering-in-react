import CarCard from "./CarCard";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      {collectionData.map((item, index) => {
        return (
          <CarCard
            key={index}
            img={item.linkImg}
            heading={item.name}
            type={item.kind}
            description={item.info}
          />
        );
      })}
    </div>
  );
};

export default Cards;
