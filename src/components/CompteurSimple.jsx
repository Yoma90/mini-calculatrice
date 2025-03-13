/**
 * Crée une application React affichant un compteur interactif.
 * Le compteur démarre à une valeur aléatoire entre 0 et 100
 * et offre deux boutons pour incrémenter ou décrémenter la valeur.
 * Ajoute une condition pour empêcher le compteur de descendre en dessous
 * de 0 et un bouton de réinitialisation qui remet le compteur à sa valeur de départ.
 */

import { useState } from "react";

export default function CompteurSimple() {
  const initial = Math.floor(Math.random() * 101);
  const [currentValue, setCurrentValue] = useState(initial);

  const increment = () => {
    setCurrentValue(currentValue + 3);
  };

  const decrement = () => {
    if (currentValue > 0) {
      setCurrentValue(currentValue - 1);
    }
  };

  const reset = () => {
    setCurrentValue(initial);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        position: "relative",
      }}
    >
      <h2>Compteur Simple</h2>
      <div
        style={{
          position: "absolute",
          top: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>
          <strong>Valeur actuelle :</strong> {currentValue}
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItem: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <button style={{ cursor: "pointer" }} onClick={decrement}>
            {" "}
            -1{" "}
          </button>
          <button style={{ cursor: "pointer" }} onClick={increment}>
            {" "}
            +3{" "}
          </button>
        </div>
        <button
          style={{
            backgroundColor: "#f6a18f",
            height: "30px",
            borderRadius: "10px",
            border: "1px solid",
            cursor: "pointer",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
