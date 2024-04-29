import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-16 bg-slate-900">
      <section className="container py-12 mx-auto ">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-16 md:gap-12 gap-8 lg:items-start items-center text-slate-300">
          <div>
            <Link className="lg:text-5xl md:text-3xl font-bold text-2xl" to="/">
              CraftCorner
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">Quick Links</h1>
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
              <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">Social Media Links</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Link to='https://www.facebook.com/profile.mohiburrahman'><img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/></Link>
              <Link to='https://www.instagram.com/developerfahad/'><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></Link>
              <Link to='https://www.linkedin.com/in/developerfahad/'><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
