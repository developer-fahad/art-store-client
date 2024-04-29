import React from "react";
import { Link } from "react-router-dom";

const Table = ({ painting }) => {
  const {
    _id,
    name,
    photo,
    category,
    price,
    process,
    rating,
    stock,
    customization,
  } = painting;
  return (
    <div className="overflow-x-auto">
      <table className="table text-left">
            <thead className=" text-right">
              <tr className=" text-left" >
                <td className="text-rose-500"><strong  className="text-black">Painting Name:</strong> {name}</td>
                <td className="text-rose-500"><strong  className="text-black">Processing Time:</strong> {process} days</td>
                <td className="text-rose-500"><strong className="text-black">Customized:</strong> {customization}</td>
                <td className="text-rose-500"><strong  className="text-black">Price:</strong> ${price}</td>
                <td className="text-rose-500"><Link className="py-2 px-3 font-bold bg-sky-500 rounded-full text-white" to={`/details/${_id}`}>View Details</Link></td>
              </tr>
            </thead>
          </table>
    </div>
  );
};

export default Table;
