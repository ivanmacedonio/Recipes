import React from "react";
import ActionAreaCard from "./Card";
import '../components/RP.css'
export const RenderProducts = ({ products }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <ActionAreaCard
            title={product.title}
            description={product.description}
            image={product.image}
          ></ActionAreaCard>
        </div>
      ))}
    </div>
  );
};
