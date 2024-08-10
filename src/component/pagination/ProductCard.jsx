import React from "react";

function ProductCard({
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
  id
}) {
  console.log(title, price, description, thumbnail, discountPercentage);
  return (
    <div className="m-4 p-4 border border-solid border-black h-30">
      <img className="h-30 w-72 object-fill" alt={title} src={thumbnail} />
      <h1 className="p-2 font-bold text-xl w-72">{id}-{title}</h1>
      <h2 className="p-1 text-lg">
        Rs. {price}- discount of {discountPercentage}%
      </h2>
      <p className="p-1 text-md w-72" >{description}</p>
    </div>
  );
}

export default ProductCard;
