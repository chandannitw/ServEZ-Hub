import React from "react";
import serviceProviderData from "../../data/serviceProvider.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import profie from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/download.png";

const ServiceProviderProfile = () => {
  const { serviceProvider } = useParams();
  const servicer = serviceProviderData.serviceProviders.find(
    (provider) => provider.serviceType === serviceProvider
  ) || {};

  return (
    <div className="w-full h-full overflow-x-hidden">
      <NavBar />
      <div className="w-[93%] lg:w-[80%] mx-auto py-12 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="w-[260px] rounded-full"
            >
              <img
                src={servicer.img || profie}
                alt="Service Provider"
                className="rounded-full w-full h-[260px]"
              />
            </motion.div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col lg:flex-row items-baseline gap-2">
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.4 },
                  }}
                  className="text-3xl font-bold"
                  style={{ WebkitTextStroke: ".3px #309847" }}
                >
                  {servicer.name || "Service Provider"}
                </motion.span>
                <div className="flex items-center gap-[2px]">
                  <span className="py-1 px-2 rounded-2xl bg-green-300 text-base font-semibold">
                    Elite
                  </span>
                  <span className="py-1 px-2 rounded-2xl bg-cyan-100 text-base font-semibold">
                    Great Value
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <FaStar className="text-yellow-300" />
                <span>{servicer.rating || "N/A"}</span>
                <span className="text-sm text-black/50">(291 reviews)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <h1 className="font-bold text-2xl text-[#386842]">
              ${servicer.hourlyRate || "N/A"}/hr
            </h1>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="px-4 py-2 border border-[#386842] hover:text-[#386842] text-white hover:bg-white transition-all duration-500 rounded-3xl text-lg font-semibold bg-[#386842]"
            >
              Select & continue
            </motion.button>
          </div>
        </div>

        <Section title="About me" content={servicer.about} />
        <Section title="Skills & Experience" content={servicer.skill} />

        <div className="flex flex-col gap-9">
          <h1 className="text-3xl font-medium pb-1 px-2 border-b-3 border-b-red-400 text-[#386842]">
            Reviews for <span className="text-black">{servicer.serviceType}</span>
          </h1>
          {servicer.reviews?.map((review, index) => (
            <Review key={index} review={review} rating={servicer.rating} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="flex flex-col gap-1">
    <h1 className="text-3xl font-medium pb-1 px-2 border-b-3 border-b-red-400 text-[#386842]">
      {title}
    </h1>
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, delay: 0.4 },
      }}
      className="text-base font-normal"
    >
      {content || "Information not available"}
    </motion.p>
  </div>
);

const Review = ({ review, rating }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        className="w-[100px] h-[100px] rounded-full"
      >
        <img src={profie} alt="Reviewer" className="w-full h-full rounded-full" />
      </motion.div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium" style={{ WebkitTextStroke: ".3px #386842" }}>
          {review.name}
        </h1>
        <div className="flex items-center gap-[2px] text-lg">
          <FaStar className="text-yellow-300" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="font-bold text-[#386842]">{review.serviceType} </span>
      <span className="text-black/80 text-xs font-medium">{review.date}</span>
    </div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.4 },
      }}
      className="font-[350]"
    >
      {review.comment}
    </motion.div>
  </div>
);

export default ServiceProviderProfile;
