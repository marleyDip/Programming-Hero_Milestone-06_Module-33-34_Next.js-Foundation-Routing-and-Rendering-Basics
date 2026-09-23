const FoodCard = ({ food }) => {
  // console.log(food);
  const { id, alternative_names } = food;

  return (
    <div>
      <h2>Food Id: {food.id}</h2>
      {/* <p>
        Alternative Names Without separator{" "}
        <code className="text-pink-300">toString()</code>:{" "}
        {food.alternative_names.toString()}
      </p>
      <p>
        Alternative Names With separator{" "}
        <code className="text-green-300">join()</code>:{" "}
        {food.alternative_names.join(", - ")}
      </p> */}

      <h2>Food Id: {id}</h2>
      <p>
        Alternative Names:{" "}
        {alternative_names.map((name, index) => (
          <span key={index}>
            {name}
            {index < alternative_names.length - 1 ? ", " : ""}
          </span>

          //   <ul key={index} className="">
          //     <li>{name}</li>
          //   </ul>
        ))}
      </p>
    </div>
  );
};

export default FoodCard;
