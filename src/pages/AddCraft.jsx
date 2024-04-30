import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddCraft = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const process = form.process.value;
    const photo = form.photo.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const user = form.user.value;
    const email = form.email.value;

    // console.log(form);

    const newCraft = {
      name,
      rating,
      description,
      price,
      category,
      process,
      photo,
      customization,
      stock,
      user,
      email,
    };
    console.log(newCraft);

    //https://art-store-server.vercel.app/paintings
    //http://localhost:5000/paintings
    
    fetch("https://art-store-server.vercel.app/paintings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Paiting Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Swal.fire("New Coffee Added Successfully!")
        }
        form.reset();
      });
  };

  return (
    <div className="bg-rose-100">
      <form
        onSubmit={handleAddCraft}
        className="border space-y-8 lg:w-8/12 md:w-9/12 w-full mx-auto lg:py-12 py-8 lg:px-8 px-3 bg-rose-50"
      >
        <div className="flex justify-center items-center">
          <h1 className="lg:text-5xl md:text-3xl text-xl text-green-500 font-bold">Add New Paiting or Drawing</h1>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Paiting or Drawing Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="name"
              required
              placeholder="Paiting or Drawing Name"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold">Category Name</label>
            {/* <input
              className="border py-2 px-5"
              type="text"
              name="category"
              placeholder="Category Name"
            /> */}
            <select className="border py-2 px-5" required name="category" id="dropdown">
              <option name="select" value="">
                Select...
              </option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Short Descriptions</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="description"
              required
              placeholder="Short Descriptions"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold">Price</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="price"
              required
              placeholder="Price"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">Rating</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="rating"
              required
              placeholder="Rating"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold">Processing Time</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="process"
              required
              placeholder="Processing Time"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label className="font-bold">User Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="user"
              value={user.displayName}
              placeholder="User Name"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold">User Email</label>
            <input
              className="border py-2 px-5"
              type="email"
              name="email"
              value={user.email}
              placeholder="User Email"
            />
          </div>
        </div>
        <div className="">
          <div className="form-control w-full">
            <label className="font-bold">Photo URL</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
            />
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:gap-8 gap-5">
          <div className="flex items-center gap-3">
            <label className="font-bold" htmlFor="dropdown">Customization:</label>
            <select
              className="border py-2 px-5"
              name="customization"
              required
              id="dropdown"
            >
              <option name="select" value="">
                Select...
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="font-bold" htmlFor="dropdown">Stock Status:</label>
            <select className="border py-2 px-5" required name="stock" id="dropdown">
              <option value="">Select...</option>
              <option value="In stock">In stock</option>
              <option value="Made to order">Made to order</option>
            </select>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Add"
            className="btn font-bold btn-accent btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
