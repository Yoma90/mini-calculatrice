import { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression("Erreur");
    }
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleReset = () => {
    setExpression("");
  };

  const Number = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {[
          1,
          2,
          3,
          "Delete",
          4,
          5,
          6,
          "-",
          7,
          8,
          9,
          "+",
          "*",
          0,
          "Reset",
          "=",
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (item === "Delete") handleDelete();
              else if (item === "Reset") handleReset();
              else if (item === "=") calculateResult();
              else handleClick(item);
            }}
            className={`px-6 py-4 text-xl font-bold rounded-lg cursor-pointer flex justify-center items-center ${
              item === "=" ? "bg-red-500 text-white" : "bg-white text-gray-800"
            } shadow-md hover:bg-gray-300 transition`}
          >
            {item}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-120 justify-center rounded-xl items-center bg-gray-500 p-8 relative">
        <h1 className="text-3xl font-bold text-white mb-6">
          Mini Calculatrice
        </h1>

        <input
          type="text"
          readOnly
          value={expression}
          className="mb-4 px-4 py-2 w-full text-right text-xl text-white font-semibold border-2 border-white rounded-md bg-gray-700"
        />

        <Number />
      </div>
    </div>
  );
};

export default App;
