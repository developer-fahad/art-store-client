import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PaintingCard from "../components/PaintingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CategoryCard from "../components/CategoryCard";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  
  const loadedPaintings = useLoaderData();
  const [paintings, setPaintings] = useState(loadedPaintings);
  console.log(loadedPaintings);

  // const loadedCategory = useLoaderData();
  // console.log(loadedCategory);

  const [artCats, setArtCat] = useState([]);

  console.log(artCats);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://art-store-server.vercel.app/allcat');
        const jsonData = await response.json();
        setArtCat(jsonData);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper xl:h-[650px] lg:h-[500px] md:h-[400px] h-[220px]"
          >
            <SwiperSlide
              className="relative"
              style={{
                backgroundImage: `url(https://i.ibb.co/Zm36rbX/pexels-2dreamersphoto-2716895.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute h-full w-full bg-black bg-opacity-70">
                <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center">
                  <h1 className="text-white font-bold">Super Hero Cartoon Painting</h1>
                  <Link className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold" to='/allartcraft'>View All</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="relative"
              style={{
                backgroundImage: `url(https://i.ibb.co/q15K0Gm/pexels-curiosophotography-288100.jpg )`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute h-full w-full bg-black bg-opacity-70">
              <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center">
                  <h1 className="text-white font-bold">Amazing Oil Painting Beauty</h1>
                  <Link className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold" to='/allartcraft'>View All</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="relative"
              style={{
                backgroundImage: `url(https://i.ibb.co/r56ZcJD/pexels-sofya-borboris-239815738-12261002.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute h-full w-full bg-black bg-opacity-70">
              <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center">
                  <h1 className="text-white font-bold">Pencil Sketching On Paper</h1>
                  <Link className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold" to='/allartcraft'>View All</Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:py-12 md:py-8 py-5">
          <h1 className="lg:text-3xl font-bold uppercase">
            Paintings & Drawings
          </h1>
          {/* <h1>Total Paintings: {loadedPaintings.length}</h1> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-5">
          {paintings.slice(0, 6).map((painting) => (
            <PaintingCard
              key={painting._id}
              painting={painting}
              paintings={paintings}
              setPaintings={setPaintings}
            ></PaintingCard>
          ))}
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:py-12 md:py-8 py-5">
          <h1 className="lg:text-3xl font-bold uppercase">Categories</h1>
          {/* <h1>Total Paintings: {loadedPaintings.length}</h1> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 gap-5">
          {
            artCats.map(cat => <CategoryCard key={cat._id} cat={cat}></CategoryCard>)
          }
        </div>
      </section>
      <section
        className="lg:mt-12 md:mt-8 mt-5"
        style={{
          backgroundImage: `url(https://i.ibb.co/74TJY8K/pexels-eberhardgross-2437286.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-20   bg-sky-600 bg-opacity-65">
          <div className="py-12 space-y-8 container mx-auto border-2">
            <div className=" flex justify-center items-center">
              <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white">
                Events Coming Soon...
              </h1>
            </div>
            <div className="flex justify-center items-center font-bold text-white">
              <p className="bg-rose-500 py-3 px-2 text-center">
                INVITE YOUR FRIENDS TO JOIN YOU AND EXPERIENCE THE ENDLESS
                CREATIVITY OUR DISTRICT OFFERS!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className=""
        style={{
          backgroundImage: `url(https://i.ibb.co/Zgm74nr/pexels-pixabay-267961.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-20   bg-black bg-opacity-80">
          <div className="py-12 space-y-8 container mx-auto">
            <div className=" flex justify-center items-center">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white">
                Subscribe Our Newsletter
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <input className="py-2 px-3 focus:outline-none" type="email" name="" placeholder="Enter your email address" />
              <button className="py-2 px-5 text-cente font-bold bg-sky-500 text-white">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
