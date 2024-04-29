import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArtCard = ({ painting, paintings, setPaintings }) => {
  // console.log(paintings);
  const { _id, name, photo, category, price, process, rating, stock, customization } =
    painting;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        console.log("Deleted Confirmed");

        fetch(`http://localhost:5000/paintings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your painting has been deleted.",
                icon: "success",
              });
              const remaining = paintings.filter((paint) => paint._id !== _id);
              setPaintings(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="border p-5 shadow-xl">
      <div className="flex flex-col  gap-5">
        <div>
          <img className="h-full w-full" src={photo} alt="" />
        </div>
        <div className="space-y-3">
          <p>
            <strong>Painting Name:</strong> {name}
          </p>
          <div className=" flex justify-between">
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Rating:</strong> {rating}
            </p>
          </div>
          <div  className=" flex justify-between">
            <p>
              <strong>Customized:</strong> {customization}
            </p>
            <p>
              <strong>Stock:</strong> {stock}
            </p>
          </div>
          <div className=" flex justify-between">
          <Link to={`/updatecraft/${_id}`} className="btn btn-success ">
            Update
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Remove
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
