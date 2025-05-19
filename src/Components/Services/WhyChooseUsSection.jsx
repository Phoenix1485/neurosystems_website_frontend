import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const WhyChooseUsSection = () => {
  const points = [
    {
      text: "Before writing any code, we invest time to fully grasp your business and its challenges or problems.",
      icon: <StarOutlineIcon />,
    },
    {
      text: "We refine the requirements as many times as needed until we achieve complete alignment.",
      icon: <StarOutlineIcon />,
    },
    {
      text: "We make realistic promises and stick to them.",
      icon: <StarOutlineIcon />,
    },
    {
      text: "We design for scalability, anticipating needs that are 20 times greater than your current ones.",
      icon: <StarOutlineIcon />,
    },
    {
      text: "We are committed to Unit Testing, ensuring our code tests itself.",
      icon: <StarOutlineIcon />,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-24">
      <div className="bg-bg-main-color rounded-lg shadow-md p-6">
        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us?</h2>
        <ul className="list-none p-0 m-0 space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-center text-xl text-gray-200">
              <span className="text-indigo-600 mr-2">
                {" "}
                {point.icon}
              </span>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
