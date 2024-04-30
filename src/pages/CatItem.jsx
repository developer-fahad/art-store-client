import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchCat from "../components/MatchCat";

const CatItem = () => {
  const { cat } = useParams();
  // console.log(cat);
  const [paintings, setPaitings] = useState([]);

  useEffect(() => {
    fetch("https://art-store-server.vercel.app/paintings")
      .then((res) => res.json())
      .then((data) => {
        setPaitings(data);
      });
  }, []);
  //   console.log(paintings);
  const remaining = paintings.filter((paint) => paint.category == cat);
  console.log(remaining);

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 gap-5">
          {remaining.map((item) => (
            <MatchCat key={item._id} item={item}></MatchCat>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatItem;
