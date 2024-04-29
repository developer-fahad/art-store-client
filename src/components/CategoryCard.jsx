import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryCard = () => {
  const category = useLoaderData();
  console.log(category.length);
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 h-96" style={{
            backgroundImage: `url(https://i.ibb.co/VgVZYhm/pexels-paul-blenkhorn-sensoryarthouse-1340564-2964525.jpg)`,
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
            <h2 className="card-title">Charcoal Sketching</h2>
            <p>Charcoal sketching is a versatile art form using charcoal sticks or pencils on paper. It allows for expressive, dynamic marks and shading. Beginners can start with basic techniques like hatching and blending. Charcoal is smudge-prone but erasable, offering both challenges and flexibility. Practice enhances control and creates stunning, emotive works.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
