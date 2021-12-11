
import "./App.css";

function App() {
  //min 4 recipes
  const recipes = [
    {
      name: "Chicken Biryani",
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
    },
    {
      name: "Ice Cream",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2016/11/chocolate-ice-cream-recipe-2.jpg",
    },
    {
      name: "Gulabjamun",
      image:
        "https://static.toiimg.com/thumb/52447240.cms?imgsize=109970&width=800&height=800",
    },
    {
      name: "Payasam",
      image:
        "https://lh5.ggpht.com/_OGMa3JuKVTk/TX8Rlzc27HI/AAAAAAAAFvU/5y16mI_GJSo/DSC_0146_thumb%5B2%5D.jpg?imgmax=800",
    },
  ];
  return (
    <div className="App">
      {recipes.map((r, index) => (
        <Displayrecipe key={index} rname={r.name} rimage={r.image} />
      ))}
    </div>
  );
}
function Displayrecipe({ rname, rimage }) {
  console.log({ rname });
  return (
    <div>
      <div>
        <img height="100" src={rimage} alt="recipe picture"/>
        <h5> {rname} ❤️</h5>
      </div>
    </div>
  );
}
export default App;
