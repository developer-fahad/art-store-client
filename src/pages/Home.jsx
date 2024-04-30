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
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

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
        const response = await fetch(
          "https://art-store-server.vercel.app/allcat"
        );
        const jsonData = await response.json();
        setArtCat(jsonData);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
                <div className="flex flex-col space-y-3 lg:text-4xl md:text-3xl text-xl h-full justify-center items-center px-2">
                  <Fade direction="down" delay={300}>
                    <h1 className="text-white font-bold ">
                      Super Hero
                      <div className="text-green-400 inline-block ml-2">
                        <Typewriter
                          words={["Cartoon Painting"]}
                          loop={true}
                          cursor
                          cursorStyle="_"
                          typeSpeed={100}
                          deleteSpeed={50}
                          delaySpeed={2000}
                        />
                      </div>
                    </h1>
                  </Fade>

                  <Fade direction="up" delay={300}>
                    <Link
                      className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold"
                      to="/allartcraft"
                    >
                      View All
                    </Link>
                  </Fade>
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
                  <Fade direction="down" delay={300}>
                  <h1 className="text-white font-bold">
                    Most Beautiful
                    <div className="text-green-400 inline-block ml-2">
                      <Typewriter
                        words={["Oil Painting"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </div>
                  </h1>
                  </Fade>
                  
                  <Fade direction="up" delay={300}>
                  <Link
                    className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold"
                    to="/allartcraft"
                  >
                    View All
                  </Link>
                  </Fade>
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
                  <Fade direction="down" delay={300}>
                  <h1 className="text-white font-bold">
                    Pencil Sketch
                    <div className="text-green-400 inline-block ml-2">
                      <Typewriter
                        words={["Portrait Drawing"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </div>
                  </h1>
                  </Fade>

                  <Fade direction="up" delay={300}>
                  <Link
                    className="py-2 px-5 rounded-full text-lg bg-sky-500 text-white font-bold"
                    to="/allartcraft"
                  >
                    View All
                  </Link>
                  </Fade>
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
          {artCats.map((cat) => (
            <CategoryCard key={cat._id} cat={cat}></CategoryCard>
          ))}
        </div>
      </section>

      <section
        className="lg:my-12 md:my-8 my-5  container mx-auto"
        style={{
          backgroundImage: `url(https://i.ibb.co/Zgm74nr/pexels-pixabay-267961.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:py-20 md:py-16 py-10 bg-black bg-opacity-80">
          <div className="py-12 md:space-y-8 space-y-3 container mx-auto">
            <div className=" flex justify-center items-center">
              <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white">
                Subscribe Our Newsletter
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <input
                className="py-2 px-3 focus:outline-none"
                type="email"
                name=""
                placeholder="Enter your email address"
              />
              <button className="py-2 px-5 text-cente font-bold bg-sky-500 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="lg:my-12 md:my-8 my-5  container mx-auto"
        style={{
          backgroundImage: `url(https://i.ibb.co/74TJY8K/pexels-eberhardgross-2437286.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:py-20 md:py-12 py-8 md:px-12 px-3 bg-sky-600 bg-opacity-65">
          <div className="py-12 md:space-y-8 space-y-3  container mx-auto border-2">
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
    </div>
  );
};

export default Home;
