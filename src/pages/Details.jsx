import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsPainting = useLoaderData();
  const {
    _id,
    name,
    email,
    photo,
    category,
    price,
    process,
    rating,
    stock,
    customization,
    description,
    user,
  } = detailsPainting;
  console.log(detailsPainting);
  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        
          <div className="flex lg:flex-row flex-col justify-between lg:gap-8 gap-5">
            <div className=" lg:w-5/12 w-full p-5">
              <img src={photo} alt="" />
            </div>
            <div className=" space-y-5 lg:w-7/12 w-full p-5">
              <div>
                <h1>
                  <strong>Painting Name:</strong> {name}
                </h1>
              </div>
              <div>
                <h1>
                  <strong>Short Details:</strong> {description}
                </h1>
              </div>
              <div>
                <h1>
                  <strong>Category:</strong> {category}
                </h1>
              </div>
              <div className="flex items-center lg:gap-28">
                <div>
                  <p>
                    <strong>Price: </strong> ${price}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Rating: </strong> {rating}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <strong>Processing Time: </strong> {process} days
                </p>
              </div>
              <div className="flex items-center lg:gap-28">
                <div>
                  <p>
                    <strong>Customized: </strong> {customization}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Stock: </strong> {stock}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <strong>Owner Name: </strong> {user}
                </p>
              </div>
              <div>
                <p>
                  <strong>Email: </strong> {email}
                </p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Details;
