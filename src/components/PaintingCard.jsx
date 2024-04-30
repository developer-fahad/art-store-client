import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const PaintingCard = ({ painting, paintings, setPaintings }) => {
  // console.log(paintings);
  const { _id, name, photo, category, price, process, rating, stock } =
    painting;
    const {user} = useContext(AuthContext)


  return (
    <div className="border p-5 shadow-xl">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center  gap-5">
        <div>
          <img className="h-64 w-80" src={photo} alt="" />
        </div>
        <div className="space-y-2">
          <p><strong>Painting Name:</strong> {name}</p>
          <p><strong>Category:</strong> <span className="py-1 rounded-full px-2 text-green-600 bg-green-50">{category}</span></p>
          <p><strong>Processing Time:</strong> {process} days</p>
          <p><strong>Status:</strong> {stock}</p>
          <p><strong>Price:</strong> ${price}</p>
          <Link to={user ? `/details/${_id}` : '/login'} className="btn btn-error ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaintingCard;
