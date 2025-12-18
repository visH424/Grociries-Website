import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";

const Testimonails = () => {
  return (
    <section className="max-w-[1400px] px-4  sm:px-6 lg:px-10  mx-auto py-10 ">
      <Heading highlight="customers" heading=" Saying" />
      <div className="py-5  flex justify-end gap-x-3">
        <button className=" custom-prev text-2xl rounded-lg  w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-amber-500 hover:text-white cursor-pointer">
          <IoIosArrowBack />
        </button>
        <button className=" custom-next text-2xl rounded-lg  w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-amber-500 hover:text-white cursor-pointer">
          <IoIosArrowForward />
        </button>
      </div>
      <Swiper
        
        spaceBetween={30}
         loop = {true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
  
        modules={[Navigation]}
        className="mySwiper"
        
       
        breakpoints={{
          0:{slidesPerView: 1},
        640:{slidesPerView: 1, spaceBetween: 20},
        768:{slidesPerView: 2, spaceBetween: 20},
        1024:{slidesPerView: 3, spaceBetween: 20},
      
      }}
      >
        {review.map((item) => {
          return (
            <SwiperSlide className="bg-zinc-100 rounded-xl    p-8 w-full max-w-sm mx-auto ">
              <div className="flex  gap-5 items-center">
                <div className="w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                   <img src={item.image} className="w-full h-full "/>

                </div>
           

                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.proffesion}</p>
                  <span className="flex text-yellow-400 mt-3 text-xl gap-1">{Array.from({length: item.rating},(_, index)=>(

                  
                  <FaStar/>
         ) )}</span>
                </div>
              </div>
              <div className="mt-10 min-h-[120px] sm:min-h-[150px]">
                <p className="text-zinc-600">
                  {item.para}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonails;

const review = [
  {
    id: 1,
    name: "Emily wick",
    proffesion: "Food Bloggy",
    rating: "3",
    para: "FreshBasket is my go to store for all grocery needs, thir produce is always fresh and the delivery is super fast I love the user-friendly interfaces and varienty of organic options!",
    image: "customer1.jpg",
  },

  {
    id: 2,
    name: "Daud-kha",
    proffesion: "Chef",
    rating: "4",
    para: "“A chef prepares delicious meals using fresh ingredients, creative skills, patience, and passion to make people happy every day.”",
    image: "customer2.jpg",
  },
  {
    id: 3,
    name: "Elvish-yadav",
    proffesion: "Model",
    rating: "9",
    para: "“Elvish Yadav is a popular Indian YouTuber and reality show winner, known for comedy videos, vlogs, and",
    image: "customer3.jpg",
  },
  {
    id: 4,
    name: "Virat Kohli",
    proffesion: "Cricketer",
    rating: "10",
    para: "Virat Kohli is an Indian cricketer, former captain, legendary batsman, fitness icon, and inspirational sports personality admired worldwide by millions.",
    image: "customer4.jpg",
  },
  {
    id: 5,
    name: "Salman Khan",
    proffesion: "Bollywood-King",
    rating: "7",
    para: "Salman Khan is a famous Indian actor, film producer, television host, and philanthropist loved by millions worldwide for decades globally.",
    image: "customer5.jpg",
  },
];
