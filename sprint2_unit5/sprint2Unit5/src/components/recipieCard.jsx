import { useEffect, useState } from "react";
import Style from "styled-components";

const Heading = Style.h3`
color: white;
padding: 10px
`;

const Image = Style.img`
width: 100%;
`;
const Holder = Style.div`
background-color: black;
cursor: pointer;
border: 2px solid purple;
margin-bottom : 10px;
&:hover {
  background : blue;
  }
`;

export default ({ title, timetocook, id, image }) => {
  const [instruc, setIns] = useState();
  const [ingred, setIngred] = useState();
  const clickHandler = (ids) => {
    console.log("Entered click handler");
    fetch(`http://localhost:3000/recipies/${ids}`)
      .then((res) => res.json())
      .then((result) => {
        setIns(result.instructions);
        setIngred(result.ingredients);
      });
  };
  return (
    <>
      <Holder
        onClick={() => {
          clickHandler(id);
        }}
      >
        <Image src={image}></Image>
        <Heading>Title is : {title}</Heading>
        <Heading>Time to cook : {timetocook}</Heading>
        <Heading>
          {instruc === undefined ? null : `Instructions : ${instruc}`}
        </Heading>
        <Heading>
          {ingred === undefined ? null : `Ingredients : ${ingred}`}
        </Heading>
      </Holder>
    </>
  );
};
