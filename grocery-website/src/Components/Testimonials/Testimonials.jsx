import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {

  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className=" flex py-5 justify-end gap-x-3">
          <button className=" custom-prev text-2xl  text-zinc-800 rounded-lg w-11 h-11  flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next  text-2xl text-zinc-800  rounded-lg w-11  h-11  flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{nextEl:".custom-next",prevEl:".custom-prev"}} modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-200 outline-offset-2"></div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600"> {item.profession}</p>
                    <span>{item.rating}</span>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-zinc-600">
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <div className="bg-zinc-100 rounded-xl p-8">
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-200 outline-offset-2">
            </div>
             <div>
                <h5 className="text-xl font-bold">Name</h5>
                <p className="text-zinc-600"> Profession</p>
                <span>starts</span>
              </div>
          </div>
          <div className="mt-10">
            <p className="text-zinc-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam deserunt vero provident tenetur ipsam impedit, rem asperiores quae quasi sed.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs.",
    img: Customer1,
  },
  {
    id: 2,
    name: "Davin Smitch",
    profession: "Chef",
    rating: 4,
    para: "FreshBasket is my go-to store for all grocery needs.",
    img: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "FreshBasket is my go-to store for all grocery needs.",
    img: Customer3,
  },
  {
    id: 4,
    name: "Rahul Pandit",
    profession: "Engineer",
    rating: 4,
    para: "FreshBasket is my go-to store for all grocery needs.",
    img: Customer4,
  },
  {
    id: 5,
    name: "Prince ",
    profession: "Developer",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs.",
    img: Customer5,
  },
];
