// import { useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../providers/AuthProvider";

// const AddCat = () => {
//   const {user} = useContext(AuthContext);
//   console.log(user);
//   const handleAddCat = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const description = form.description.value;
//     const category = form.category.value;
//     const photo = form.photo.value;

//     // console.log(form);

//     const newCat = {
//       description,
//       category,
//       photo
//     };
//     console.log(newCat);

//     //https://art-store-server.vercel.app/paintings
//     //http://localhost:5000/paintings
    
//     fetch("https://art-store-server.vercel.app/allcat", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newCat),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "New Cat Added Successfully!",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//           // Swal.fire("New Coffee Added Successfully!")
//         }
//         form.reset();
//       });
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleAddCat}
//         className="border space-y-8 lg:w-8/12 md:w-9/12 w-full mx-auto lg:py-12 py-8 lg:px-8 px-3 bg-rose-50"
//       >
//         <div className="flex justify-center items-center">
//           <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">Add New Paiting or Drawing</h1>
//         </div>
//         <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          
//           <div className="form-control w-full">
//             <label>Category Name</label>
//             <select className="border py-2 px-5" required name="category" id="dropdown">
//               <option name="select" value="">
//                 Select...
//               </option>
//               <option value="Landscape Painting">Landscape Painting</option>
//               <option value="Portrait Drawing">Portrait Drawing</option>
//               <option value="Watercolour Painting">Watercolour Painting</option>
//               <option value="Oil Painting">Oil Painting</option>
//               <option value="Charcoal Sketching">Charcoal Sketching</option>
//               <option value="Cartoon Drawing">Cartoon Drawing</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
//           <div className="form-control w-full">
//             <label>Short Descriptions</label>
//             <input
//               className="border py-2 px-5"
//               type="text"
//               name="description"
//               required
//               placeholder="Short Descriptions"
//             />
//           </div>
//         </div>
//         <div className="">
//           <div className="form-control w-full">
//             <label>Photo URL</label>
//             <input
//               className="border py-2 px-5"
//               type="text"
//               name="photo"
//               required
//               placeholder="Photo URL"
//             />
//           </div>
//         </div>
//         <div>
//           <input
//             type="submit"
//             value="Add"
//             className="btn btn-accent btn-block"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddCat;
