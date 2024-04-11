import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food_img"
        alt="Francesinha"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24xwlYy5M4uAGkBQflZDLPNRPR3DGBDPQGfsY_M8HMw&shttps://pt.rc-cdn.community.thermomix.com/recipeimage/4u5w1r9u-a2c0d-876541-d2857-wei23vu8/cbbd4640-2e8f-4bbc-b077-25569f1b4def/main/variante-francesinha-a-porto-para-criancas.jpg"
      />
      <img
        className="food_img"
        alt="Massa"
        src="https://www.planta.pt/-/media/Project/Upfield/Brands/Rama/Planta-PT/Assets/Recipes/sync-images/6e6e1409-0c81-4185-a1c6-3ea76e293b8a.jpg?rev=4d5dd639464149479a0d706d1c41952b&w=900"
      />
      <img
        className="food_img"
        alt="Bacalhau"
        src="https://www.pescanova.pt/content/img/808x808/Bacalhau_Forno_Castanhas_Batatinhas-2.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
