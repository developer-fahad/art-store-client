import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CategoryCard = ({cat}) => {
  console.log(cat);
  const {category, description, photo} = cat || {};

  


  return (
    <div>
      <Link to='/catitem'>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 h-96" style={{
            backgroundImage: `url(${photo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            {/* <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            /> */}
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-4xl md:text-3xl text-xl">{category}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
