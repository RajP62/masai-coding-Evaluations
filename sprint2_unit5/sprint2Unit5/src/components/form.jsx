import { useState, useRef } from "react";
import Style from "styled-components";

const Input = Style.input`
  border: 2px solid grey;
  display: block;
  margin-bottom: 10px;
`;

export default () => {
  const [form, setForm] = useState({});
  const [imgurl, setImg] = useState("");
  const ref_file = useRef();
  const handler = (e) => {
    var { type, name, value } = e.target;
    console.log(type);
    console.log(type === "file");
    if (type === "file") {
      console.log("entered file code");
      const file = ref_file.current.files[0];
      const formData = new FormData();
      formData.append("image", file);
      fetch("https://api.imgur.com/3/image", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Client-Id 92c52e5e69436d4"
        }
      })
        .then((res) => res.json())
        .then((result) => {
          setForm({ ...form, [name]: result.data.link });
        });
    }
    if (type !== "file") {
      if (type === "file") {
        value = imgurl;
      }
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const submitInfo = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/recipies", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  return (
    <>
      <form onSubmit={submitInfo}>
        <h1>Recipies</h1>
        <Input
          onChange={handler}
          type="text"
          placeholder="Title"
          name="title"
        />
        <Input
          onChange={handler}
          type="text"
          placeholder="Ingredients"
          name="ingredients"
        />
        <Input
          onChange={handler}
          type="Number"
          placeholder="Time to cook"
          name="timetocook"
        />
        <Input
          onChange={handler}
          ref={ref_file}
          type="file"
          placeholder="Image"
          name="image"
        />
        <Input
          onChange={handler}
          type="text"
          placeholder="Instructions"
          name="instructions"
        />
        <Input type="submit" />
      </form>
    </>
  );
};
