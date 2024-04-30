import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MatchCat = ({ item }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <section className="container mx-auto">
        <div className="space-y-5 p-4 border shadow-lg">
          <div>
            <img className="h-full w-full" src={item.photo} alt="" />
          </div>
          <div className="space-y-3">
            <div className=" flex">
              <p>
                <strong>Painting Name:</strong> {item.name}
              </p>
            </div>

            <div className=" flex">
              <p>
                <strong>Category:</strong> {item.category}
              </p>
            </div>
            <div className=" flex">
              <p>
                <strong>Description:</strong> {item.description}
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
              </div>
              <div>
                <p>
                  <strong>Rating:</strong> {item.rating}
                </p>
              </div>
            </div>
            <div className=" flex">
              <p>
                <strong>Processing Time:</strong> {item.process} days
              </p>
            </div>
            <div className=" flex justify-center">
              <Link
                to={user ? `/details/${item._id}` : "/login"}
                className="py-3 px-5 w-full text-center font-bold bg-sky-500 text-white"
              >
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
