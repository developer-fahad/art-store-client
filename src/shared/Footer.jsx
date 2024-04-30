import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-8 bg-black">
      <section className="container py-5 mx-auto ">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-16 md:gap-12 gap-8 lg:items-start items-center text-slate-300">
          <div className="space-y-3">
            <Link className="" to="/">
              <h1 className="lg:text-5xl md:text-2xl text-xl font-bold lg:text-left text-center">CraftCorner</h1>
              
            </Link>
            <p className="xl:w-72 lg:w-64 md:w-44 lg:text-left text-center">Your online destination for unique handmade crafts, bringing creativity and inspiration to your home.</p>
          </div>
          <div className="space-y-3">
            <div>
              <h1 className="lg:text-lg md:text-base text-sm font-bold text-center">Quick Links</h1>
            </div>
            <div className="text-center">
              <ul>
                <li className="underline"><Link to='/'>Home</Link></li>
                <li className="underline"><Link to='/contact'>Contact</Link></li>
                <li className="underline"><Link to='/policy'>Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h1 className="lg:text-lg md:text-base text-sm font-bold text-center">Social Media Links</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Link to='https://www.facebook.com/profile.mohiburrahman'><img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/></Link>
              <Link to='https://www.instagram.com/developerfahad/'><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></Link>
              <Link to='https://www.linkedin.com/in/developerfahad/'><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></Link>
            </div>
          </div>
        </div>
        
          <hr className="mt-5 border-slate-600" />
        
        <div className="flex flex-col py-4 justify-center items-center text-slate-300">
          <p className="text-center">Copyright &copy;2024 CraftCorner. All rights reserved.</p>
          <p className="text-center">Design & Developed by Developer Fahad.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
