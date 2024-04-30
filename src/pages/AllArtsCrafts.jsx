import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ArtCard from "../components/ArtCard";
// import PaintingCard from "../components/PaintingCard";
import { AuthContext } from "../providers/AuthProvider";

const AllArtsCrafts = () => {
  const loadedPaintings = useLoaderData();
  const {user} = useContext(AuthContext)


  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className=" min-h-screen">
      <section className=" container mx-auto">
        <div className="flex justify-center items-center lg:py-12 md:py-8 py-5">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">
            All Paintings & Drawings
          </h1>
        </div>
        
        {/* <div className="">
        {loadedPaintings.map((painting) => (
          <Table key={painting._id} painting={painting}></Table>
        ))}
      </div> */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="font-bold text-lg">Index</th>
                  <th className="font-bold text-lg">Name</th>
                  <th className="font-bold text-lg">Photo</th>
                  <th className="font-bold text-lg">
                    Processing Time
                  </th>
                  <th className="font-bold text-lg">
                    Customization
                  </th>
                  <th className="font-bold text-lg">Price</th>
                  <th className="font-bold text-lg">Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {loadedPaintings.map((painting, idx) => (
                  <tr key={painting._id}>
                    <th className="font-bold border-r text-green-500">
                      {idx + 1}
                    </th>
                    <td className="font-bold">{painting.name}</td>
                    <td className="font-bold">
                      <img className="h-12 w-12" src={painting.photo} alt="" />
                    </td>
                    <td className="font-bold">
                      {painting.process} days
                    </td>
                    <td className="font-bold">
                      {painting.customization}
                    </td>
                    <td className="font-bold">${painting.price}</td>
                    <td className="font-bold">
                      <Link
                        className="py-2 lg:px-3 px-5    bg-sky-600 rounded-full  text-white"
                        to={user ? `/details/${painting._id}`: '/login'}
                      >
                        <button className="">View Details</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllArtsCrafts;
