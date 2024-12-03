import React from "react";
import "./services.css";
import { motion } from "framer-motion";

const ServiceCard = ({ items, description, image, heading }) => {
  return (
    <div className="w-full lg:w-[370px] xl:w-[370px] rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden">
      <div className="w-full h-[210px]">
        <img src={image} alt={heading} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-6 gap-4">
        <div className="w-full border-b-2 pb-4 border-gray-300">
          <h1 className="text-xl font-bold text-green-700">{heading}</h1>
          <p className="text-gray-600 mt-1 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.8, delay: index * 0.2 },
              }}
              key={index}
              className="text-green-700 text-sm font-medium cursor-pointer hover:underline"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
