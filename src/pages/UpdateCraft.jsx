import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCraft = () => {
    const painting = useLoaderData()
    const { _id, name, photo, category, price, process, rating, stock, customization, description, user, email } =
    painting;

    const handleUpdateCraft = (e) => {
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
    
        const updatedCraft = {
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
        console.log(updatedCraft);
    
        //https://art-store-server.vercel.app/paintings
        //http://localhost:5000/paintings
        
        fetch(`http://localhost:5000/paintings/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCraft),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Paiting Updated Successfully!",
                icon: "success",
                confirmButtonText: "Cool",
              });
              // Swal.fire("New Coffee Added Successfully!")
            }
            // form.reset();
          });
      };

    return (
        <div>
      <form
        onSubmit={handleUpdateCraft}
        className="border space-y-8 lg:w-8/12 md:w-9/12 w-full mx-auto lg:py-12 py-8 lg:px-8 px-3 bg-rose-50"
      >
        <div className="flex justify-center items-center">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">Update Paiting or Drawing Info</h1>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label>Paiting or Drawing Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Paiting or Drawing Name"
            />
          </div>
          <div className="form-control w-full">
            <label>Category Name</label>
            {/* <input
              className="border py-2 px-5"
              type="text"
              name="category"
              placeholder="Category Name"
            /> */}
            <select className="border py-2 px-5" defaultValue={category} name="category" id="dropdown">
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
            <label>Short Descriptions</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Short Descriptions"
            />
          </div>
          <div className="form-control w-full">
            <label>Price</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label>Rating</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
            />
          </div>
          <div className="form-control w-full">
            <label>Processing Time</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="process"
              defaultValue={process}
              placeholder="Processing Time"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-8">
          <div className="form-control w-full">
            <label>User Name</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="user"
              value={user}
              placeholder="User Name"
            />
          </div>
          <div className="form-control w-full">
            <label>User Email</label>
            <input
              className="border py-2 px-5"
              type="email"
              name="email"
              value={email}
              placeholder="User Email"
            />
          </div>
        </div>
        <div className="">
          <div className="form-control w-full">
            <label>Photo URL</label>
            <input
              className="border py-2 px-5"
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
            />
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:gap-8 gap-5">
          <div className="flex items-center gap-3">
            <label htmlFor="dropdown">Customization:</label>
            <select
              className="border py-2 px-5"
              name="customization"
              defaultValue={customization}
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
            <label htmlFor="dropdown">Stock Status:</label>
            <select className="border py-2 px-5" defaultValue={stock} name="stock" id="dropdown">
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
            className="btn btn-accent btn-block"
          />
        </div>
      </form>
    </div>
    );
};

export default UpdateCraft;