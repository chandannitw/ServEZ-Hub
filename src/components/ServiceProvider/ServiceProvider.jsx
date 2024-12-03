import React from "react";
import { motion } from "framer-motion";
import serviceProviderData from "../../data/serviceProvider.json";
import { GoArrowRight } from "react-icons/go";
import midShape from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_right_shape_first.bfe4482f.svg";
import { Link } from "react-router-dom";

const ServiceProvider = () => {
  const serviceProviders = serviceProviderData.serviceProviders;

  return (
    <div className="w-full mt-12 h-auto mx-auto relative flex flex-col justify-center items-center gap-10">
      {/* Decorative Background Shape */}
      <div className="absolute right-0 -top-40 hidden lg:block z-20">
        <img src={midShape} alt="Decorative Shape" />
      </div>

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-[#386842] w-full lg:w-3/4 px-4 lg:px-0">
        Service Providers
      </h1>

      {/* Service Provider Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-4/5 px-4 lg:px-0">
        {serviceProviders.map((provider) => (
          <Link key={provider.id} to={`/service/${provider.serviceType}`}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              className="flex flex-col items-center bg-[#f0faf5] rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border border-transparent hover:border-[#0d7a5f] p-4 cursor-pointer"
            >
              {/* Provider Image */}
              <img
                src={provider.img}
                alt={`${provider.name} - ${provider.serviceType}`}
                className="w-full h-56 object-cover rounded-t-lg"
              />

              {/* Provider Information */}
              <div className="text-left w-full p-4">
                <h2 className="font-bold text-lg text-[#0d7a5f]">
                  {provider.name}
                </h2>
                <p className="font-medium text-md text-gray-600">
                  {provider.serviceType}
                </p>
                <p className="text-sm font-semibold text-gray-500">
                  Location: <span className="font-normal">{provider.location}</span>
                </p>
                <p className="text-sm font-semibold text-gray-500">
                  Timing: <span className="font-normal">{provider.availability}</span>
                </p>
                <div className="flex justify-between items-center pt-3">
                  <p className="text-sm font-semibold text-gray-500">
                    Hourly rate:{" "}
                    <span className="text-[#386842] text-lg font-bold">
                      ${provider.hourlyRate}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full transition-all border border-[#386842] bg-[#386842] text-white hover:bg-white hover:text-[#386842]">
                    <span>View</span>
                    <GoArrowRight className="text-xs" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceProvider;
