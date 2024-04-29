import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PaintingCard from "../components/PaintingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const loadedPaintings = useLoaderData();
  const [paintings, setPaintings] = useState(loadedPaintings);
  console.log(loadedPaintings);

  const loadedCategory = useLoaderData();
  console.log(loadedCategory);

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
                <div className="flex h-full justify-center items-center">
                  <h1 className="text-white">I'm absolute</h1>
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
                <div className="flex h-full justify-center items-center">
                  <h1 className="text-white">I'm absolute</h1>
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
                <div className="flex h-full justify-center items-center">
                  <h1 className="text-white">I'm absolute</h1>
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {/* <CategoryCard></CategoryCard> */}
        </div>
      </section>
      <section
        className="lg:my-12 md:my-8 my-5"
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
              <p className="bg-rose-500 py-3 px-2">
                INVITE YOUR FRIENDS TO JOIN YOU AND EXPERIENCE THE ENDLESS
                CREATIVITY OUR DISTRICT OFFERS!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
