import React from "react";
import { education } from "../../constants"; // Import the education data
import Container from "../Container/Container";

const Education = () => {
  return (
    <Container
      id="education"
      className="py-24 pb-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-4 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        <div className="space-y-16 pl-12 sm:pl-0">
          {education.map((edu, index) => (
                          <div
                            key={edu.id}
                            className="sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-x-8 items-center"
                          >
                            {/* Content Section (Left or Right) */}
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'sm:col-start-3 sm:text-left sm:ml-8' : 'sm:col-start-1 sm:text-right'
                }`}
              >
                {/* Flex container for image and text */}
                <div
                  className={`flex items-center space-x-6 ${
                    index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* School Logo/Image */}
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>

              {/* Timeline Circle */}
              <div className="hidden sm:block sm:col-start-2 relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Education;
