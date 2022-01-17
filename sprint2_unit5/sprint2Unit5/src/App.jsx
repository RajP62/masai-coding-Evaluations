import { useEffect, useState } from "react";
import Form from "./components/form";
import Recipie from "./components/recipies";
import Style from "styled-components";

const DivFlex = Style.div(`
display: flex,
background-color: black,
justify-content: space-between
`);

export default function App() {
  const [recipies, setRecipie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipies")
      .then((res) => res.json())
      .then((result) => setRecipie(result));
  }, []);

  const sortHandler = (e) => {
    const { name } = e.target;
    if (name === "LTH") {
      let temp = [...recipies];
      temp.sort((a, b) => a.timetocook - b.timetocook);
      setRecipie(temp);
    } else {
      let temp = [...recipies];
      temp.sort((a, b) => b.timetocook - a.timetocook);
      setRecipie(temp);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div>
        <Form />
        <h1>Sorting functionality</h1>
        <button onClick={sortHandler} name="LTH">
          Low to high
        </button>
        <button onClick={sortHandler} name="HTL">
          High to low
        </button>
      </div>
      <Recipie recipies={recipies} />
    </div>
  );
}
