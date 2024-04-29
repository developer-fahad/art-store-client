import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import PageTitle from "../../components/PageTitle";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const ProfileEdit = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [isModified, setIsModified] = useState(false);
  const [initialProfile, setInitialProfile] = useState({ name: user.displayName, photoURL: user.photoURL });


  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(name, photoURL)
      .then(() => {
        setIsModified(false);
        toast.success("Updated Successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.");
      });
  };

  const handleFieldChange = (fieldName, fieldValue) => {
    if (!isModified && fieldValue !== initialProfile[fieldName]) {
      setIsModified(true);
    }
    
  };

  return (
    <div className="container mx-auto">
      {/* <PageTitle pageTitle={"PeakHome | Update you profile"}></PageTitle> */}
      <section className="min-h-screen flex justify-center">
        <div className="border xl:w-3/6 lg:w-4/6 md:w-4/6 w-full md:py-12 py-8 md:px-8 px-5 rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center py-3">
              <h2 className="text-3xl font-bold">Edit Your Profile</h2>
            </div>
            <div className="py-3">
              <label>
                <strong>Name</strong>
                <input
                  className="pt-2 focus:outline-none border-b-2 border-b-transparent focus:border-b-2 focus:border-b-[#012A2D] w-full"
                  type="text"
                  value={name}
                  // onChange={(e) => setName(e.target.value)}
                  onChange={(e) => {
                    setName(e.target.value);
                    handleFieldChange('name', e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="py-3">
              <label className="">
                <strong>Photo URL</strong>
                <input
                  className="pt-2 focus:outline-none border-b-2 border-b-transparent focus:border-b-2 focus:border-b-[#012A2D] w-full"
                  type="text"
                  value={photoURL}
                  // onChange={(e) => setPhotoURL(e.target.value)}
                  onChange={(e) => {
                    setPhotoURL(e.target.value);
                    handleFieldChange('photoURL', e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="py-3">
              <button type="submit" className={isModified ? "py-3 px-5 font-semibold bg-[#012A2D] text-white" : "py-3 px-5 font-semibold bg-gray-100"} disabled={!isModified}>Save Changes</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProfileEdit;
