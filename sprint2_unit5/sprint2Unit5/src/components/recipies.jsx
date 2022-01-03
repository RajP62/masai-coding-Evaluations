import RecipieCard from "./recipieCard";
import Style from "styled-components";

const Div = Style.div`
background : white;
font-size: 12px;
font-weight: lighter;
`;

export default ({ recipies }) => {
  return (
    <>
      <Div>
        {recipies.map((el) => (
          <RecipieCard
            title={el.title}
            timetocook={el.timetocook}
            image={el.image}
            id={el.id}
          />
        ))}
      </Div>
    </>
  );
};
