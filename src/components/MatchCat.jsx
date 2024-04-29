import React from "react";
import { Link } from "react-router-dom";

const MatchCat = ({ item }) => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        
        <div className="space-y-5 p-4 border shadow-lg">
          <div>
            <img className="h-full w-full" src={item.photo} alt="" />
          </div>
          <div className="space-y-3">
            <div className=" flex justify-center">
              <p>
                <strong>Painting Name:</strong> {item.name}
              </p>
            </div>

            <div className=" flex justify-center">
              <p>
                <strong>Category:</strong> {item.category}
              </p>
            </div>
            <div className=" flex justify-center">
              <Link to={`/details/${item._id}`} className="py-3 px-5 bg-sky-500 text-white">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatchCat;
