// import React, { useContext, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import Table from "../components/Table";
// import { AuthContext } from "../providers/AuthProvider";
// import ArtCard from "../components/ArtCard";

// const MyArtsLists = () => {
//   const { user } = useContext(AuthContext);
//   // console.log(user?.email);
//   const loadedPaintings = useLoaderData();

//   // console.log(loadedArts);
//   const remaining = loadedPaintings?.filter(
//     (paiting) => paiting.email == user?.email
//   );
//   const [paintings, setPaintings] = useState(remaining);
//   // const [displayPaintings, setDisplayPaintings] =useState([]);
//   // console.log(displayPaintings);

//   // setDisplayPaintings(paintings);
//   // console.log(remaining);

//   // const handlePaitingsFilter = text =>{
//   //   if(text === 'All'){
//   //     setDisplayPaintings(paintings);
//   //   }
//   //   else if(text === 'Yes'){
//   //     const customizeYes = paintings.filter(yes => yes.cutomization === 'Yes');
//   //     setDisplayPaintings(customizeYes);
//   //   }
//   //   else if(text === 'No'){
//   //     const customizeNo = paintings.filter(no => no.cutomization === 'No');
//   //     setDisplayPaintings(customizeNo);
//   //   }
//   // }

//   return (
//     <div className="min-h-screen">
//       <section className="container mx-auto">
//         <div className="flex justify-center items-center lg:py-12 md:py-8 py-5">
//           <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">My Painting Lists</h1>
//           {/* <h1>Total Paintings: {loadedPaintings.length}</h1> */}
//         </div>
//         <div className="flex justify-end items-center gap-5 lg:py-8 py-2">
//           <details className="dropdown">
//             <summary className="m-1 btn">open or close</summary>
//             <ul className="p-2 shadow menu dropdown-content  z-10 bg-base-100 rounded-box w-32">
//               <li>
//                 <a>All</a>
//               </li>
//               <li>
//                 <a>Yes</a>
//               </li>
//               <li>
//                 <a>No</a>
//               </li>
//             </ul>
//           </details>
//         </div>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-5">
//           {paintings.map((painting) => (
//             <ArtCard
//               key={painting._id}
//               painting={painting}
//               paintings={paintings}
//               setPaintings={setPaintings}
//             ></ArtCard>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyArtsLists;

import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import { AuthContext } from "../providers/AuthProvider";
import ArtCard from "../components/ArtCard";
import { Tooltip } from "react-tooltip";

const MyArtsLists = () => {
  const { user } = useContext(AuthContext);
  const loadedPaintings = useLoaderData();

  const [paintings, setPaintings] = useState([]);
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    if (user) {
      const remainingPaintings = loadedPaintings.filter(
        (painting) => painting.email === user.email
      );
      setRemaining(remainingPaintings);
      setPaintings(remainingPaintings);
    }
  }, [user, loadedPaintings]);

  // Function to filter paintings based on customization

  const handleFilterPaintings = (customization) => {
    let filteredPaintings = [];
    if (customization === "All") {
      filteredPaintings = remaining;
    } else {
      filteredPaintings = remaining.filter(
        (painting) => painting.customization === customization
      );
    }
    setPaintings(filteredPaintings);
  };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:py-12 md:py-8 py-5">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">My Painting Lists</h1>
        </div>
        <div className="flex justify-center items-center gap-5 lg:py-8 py-2">
          <details className="dropdown">
            <summary  className="m-1 btn">Filter by Cutomization</summary>
            
            <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-44">
              <li>
                <button onClick={() => handleFilterPaintings("All")}>All</button>
              </li>
              <li>
                <button onClick={() => handleFilterPaintings("Yes")}>Yes</button>
              </li>
              <li>
                <button onClick={() => handleFilterPaintings("No")}>No</button>
              </li>
            </ul>
          </details>
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

