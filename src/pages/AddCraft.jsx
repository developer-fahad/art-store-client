import Swal from 'sweetalert2'

const AddCraft = () => {

    const handleAddCraft = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        fetch("http://localhost:5000/coffee", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'New Coffee Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                // Swal.fire("New Coffee Added Successfully!")
            }
        })
    }

  return (
    <div>
      <form onSubmit={handleAddCraft} className="border space-y-8 w-8/12 mx-auto py-12 px-8 bg-rose-50">
        <div className="flex justify-center items-center">
            <h1 className="text-5xl font-bold">Add Coffee</h1>
        </div>
        <div className="flex justify-between gap-8">
          <div  className="form-control w-full">
            <label>Coffee Name</label>
            <input className="border py-2 px-5" type="text" name="name" placeholder="Coffee Name" />
          </div>
          <div className="form-control w-full">
            <label>Quantity</label>
            <input className="border py-2 px-5" type="text" name="quantity" placeholder="Quantity" />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div  className="form-control w-full">
            <label>Supplier</label>
            <input className="border py-2 px-5" type="text" name="supplier" placeholder="Supplier Name" />
          </div>
          <div className="form-control w-full">
            <label>Taste</label>
            <input className="border py-2 px-5" type="text" name="taste" placeholder="Taste" />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div  className="form-control w-full">
            <label>Category</label>
            <input className="border py-2 px-5" type="text" name="category" placeholder="Category" />
          </div>
          <div className="form-control w-full">
            <label>Details</label>
            <input className="border py-2 px-5" type="text" name="details" placeholder="Details" />
          </div>
        </div>
        <div className="">
          <div  className="form-control w-full">
            <label>Photo URL</label>
            <input className="border py-2 px-5" type="text" name="photo" placeholder="Photo URL" />
          </div>
        </div>
        <div>
            <input type="submit" value="Add Coffee" className="btn btn-accent btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
