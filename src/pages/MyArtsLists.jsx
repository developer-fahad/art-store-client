import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import { AuthContext } from "../providers/AuthProvider";
import ArtCard from "../components/ArtCard";

const MyArtsLists = () => {
  const {user} = useContext(AuthContext);
  // console.log(user?.email);
  const loadedPaintings = useLoaderData();
  
  // console.log(loadedArts);
  const remaining = loadedPaintings?.filter(paiting => paiting.email == user?.email);
  const [paintings, setPaintings] = useState(remaining);
  // console.log(remaining);

  
  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:py-12 md:py-8 py-5">
          <h1 className="lg:text-3xl font-bold">My Painting Lists</h1>
          {/* <h1>Total Paintings: {loadedPaintings.length}</h1> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-5">
          {paintings.map((painting) => (
            <ArtCard
              key={painting._id}
              painting={painting}
              paintings={paintings}
              setPaintings={setPaintings}
            ></ArtCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyArtsLists;


