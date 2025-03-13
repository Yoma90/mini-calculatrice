import { useState } from "react";

const FilteredItem = () => {
  const [items, setItems] = useState("");
  const [colors, setColors] = useState("");

  const handleChange = (e) => {
    setItems(e.target.value);
  };

  const handleColorChange = (e) => {
    setColors(e.target.value);
  };

  return (
    <div>
      <h1>Table of products</h1>
      <input type="text" value={items} onChange={handleChange} />
      <p>Typied input: {items}</p>
      <select onChange={handleColorChange}>
        <option value="">Sélectionne ta couleur</option>
        <option value="blue">Bleu</option>
        <option value="red">Rouge</option>
        <option value="yellow">Jaune</option>
        <option value="gray">Gris</option>
      </select>
      <div style={{ backgroundColor: colors, width: "200px", height: "200px" }}>
        {colors}
      </div>
    </div>
  );
};
export default FilteredItem;
