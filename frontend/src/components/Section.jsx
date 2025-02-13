import React from "react";
import { motion } from "framer-motion";
import sdgImage from "../assets/1.jpg";
import arrowIcon from "../assets/1.jpg";

const Section = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="container mx-auto px-6 md:px-12 py-16 relative">
      {/* Main Title and Description */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Championing{" "}
            <span className="relative inline-block">
              Global Citizenship
              <span className="absolute -bottom-2 left-16 w-40 md:w-72 h-1 bg-yellow-400"></span>
            </span>
            <br /> at UN-ET UOG <br /> Chapter
          </h2>
        </div>
        <div className="md:w-1/2 relative">
          <p className="text-gray-600 text-lg leading-relaxed">
            At UN-ET UOG Chapter, we are committed to embedding the ideals of the United Nations into the student experience at the University of Gondar. Our organization thrives on building a community that emphasizes collaboration, leadership, and the pursuit of global awareness through meaningful initiatives.
          </p>
          <img
            src={arrowIcon}
            alt="Decorative Arrow"
            className="absolute -bottom-12 right-8 w-16 md:w-24"
          />
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Background Image Card */}
        <div className="col-span-1 md:col-span-2 row-span-2">
          <img
            src={sdgImage}
            alt="UN Sustainable Development Goals"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Animated Cards */}
        <div className="space-y-8">
          {[
            {
              title: "UN-Inspired Leadership for Social Change",
              description: "Become a part of our six dedicated teams.",
            },
            {
              title: "Make a Difference through Workshops",
              description:
                "Participate in enriching events designed to equip you with essential skills and knowledge.",
            },
            {
              title: "Skills and Networking",
              description:
                "Our initiatives empower students through collaborative learning and networking opportunities.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#002D62] text-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-sm text-gray-200">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Star */}
      <div className="absolute top-0 right-1/4 text-orange-400">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9H24L17 14.5L20 23L12 17.5L4 23L7 14.5L0 9H9L12 0Z" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 right-0">
        <svg className="w-24 h-24 text-orange-400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20 80 L80 80 M30 60 L90 60 M40 40 L100 40" />
        </svg>
      </div>
    </section>
  );
};

export default Section;
