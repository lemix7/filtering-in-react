import CarCard from "./componenet/CarCard";
import FilterBtn from "./componenet/FilterBtn";
import { collectionData } from "../data/collectionData";
import { useState } from "react";

const App = () => {
  const [filter, setFilter] = useState(collectionData);
  const [searchNotFound, setSearchNotFound] = useState(null);

  const handleFilter = (e) => { // this will filter the items from the json file based on the kind of the item
    let word = e.target.innerText.toLowerCase();

    if (word === "all") {
      setFilter(collectionData);
    } else if (word === "cars") {
      let cars = collectionData.filter((item) => item.kind === "Cars");
      setFilter(cars);
    } else if (word === "views") {
      let views = collectionData.filter((item) => item.kind === "Views");
      setFilter(views);
    }
  };

  const handleSearch = (e) => { // this will look for the items from the json file based on the name of the item
    let word = e.target.value.toLowerCase();

    if (
      collectionData.filter((item) => item.name.toLowerCase().includes(word))
    ) {
      let search = collectionData.filter((item) =>
        item.name.toLowerCase().includes(word)
      );

      setFilter(search);
      setSearchNotFound(false);
    } 
    
    if(word !== '' && searchNotFound == null){
      setSearchNotFound(true);
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-start items-center py-6 px-8">
      <h1 className="text-4xl font-bold mb-11 capitalize">
        filtering with react{" "}
      </h1>

      <input
        className="bg-gray-200 py-2 px-4 rounded-lg mb-11 w-[250px] outline-none "
        type="text"
        placeholder="Cars"
        onChange={handleSearch}
      />

      <div className="flex gap-8 mb-[60px]">
        <FilterBtn btnText="All" onClick={handleFilter} />
        <FilterBtn btnText="cars" onClick={handleFilter} />
        <FilterBtn btnText="views" onClick={handleFilter} />
      </div>

      {searchNotFound ? (
        <h1 className="text-2xl font-semibold text-red-500 mb-6">
          No result found
        </h1>
      ) : null}

      <div className="flex flex-wrap gap-6 justify-center items-center">
        {filter.map((item, index) => {
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
    </div>
  );
};

export default App;
