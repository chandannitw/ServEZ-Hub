import React from "react";
import reviewsData from "../../data/review.json";
import logo from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/US_TP_Logo_2x.webp";
import midLeft from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_left_shape.9b13a86d.svg";
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";

const Review = () => {
  const reviews = reviewsData.reviews;

  return (
    <div className="w-full overflow-hidden h-auto relative flex flex-col items-center gap-10 mt-[10vh] mb-[15vh]">
      {/* Background Element */}
      <div className="absolute left-0 -top-[200px] hidden lg:block">
        <img src={midLeft} alt="Decorative Shape" />
      </div>

      {/* Header */}
      <div className="w-full text-center mx-auto px-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, delay: 0.3 },
          }}
          className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-[#0d7a5f] bg-clip-text text-transparent"
        >
          Hear From Our Satisfied Customers
        </motion.h1>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 lg:px-20">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2, delay: 0.3 },
            }}
            className="bg-gradient-to-br from-[#f0f4f2] to-[#e0e5dd] shadow-lg rounded-lg p-6 flex flex-col gap-3 transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-800">{review.userName}</h1>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: index * 0.1 },
                    }}
                  >
                    <IoStar />
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.4 },
              }}
              className="line-clamp-5 text-gray-700 font-light leading-relaxed hover:text-[#0d7a5f]"
            >
              {review.comment}
            </motion.p>
            <h2 className="text-lg font-medium text-[#386842] mt-2">{review.service}</h2>
          </motion.div>
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1.5, delay: 0.6 },
        }}
        className="mt-10"
      >
        <img src={logo} alt="Logo" className="h-20 w-auto mx-auto opacity-90" />
      </motion.div>
    </div>
  );
};

export default Review;
