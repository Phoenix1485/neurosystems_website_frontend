import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faCloud, faPaintBrush, faCheckCircle, faDatabase, faPalette, faCog } from '@fortawesome/free-solid-svg-icons';
import AnimatedUnderline from '../../Animations/AnimatedUnderline';
import HoverCard from '../UI/HoverCard';

const services = [
  { icon: faCode, title: 'Software Development', description: 'Building robust software solutions.' },
  { icon: faMobileAlt, title: 'Web and Mobile App Development', description: 'Creating responsive web and mobile apps.' },
  { icon: faCloud, title: 'Cloud Solutions', description: 'Offering scalable cloud services.' },
  { icon: faPaintBrush, title: 'UI/UX Design', description: 'Designing user-friendly interfaces.' },
  { icon: faCheckCircle, title: 'Quality Assurance and Testing', description: 'Ensuring high-quality products.' },
  { icon: faDatabase, title: 'Good Database', description: 'Empowering data integrity with precision.' },
  { icon: faPalette, title: 'Modern Design', description: 'Crafting digital experiences with visionary design.' },
  { icon: faCog, title: 'Custom Solutions', description: 'Tailored solutions to fit your unique needs.' },
];

const Services = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-10">
      <div className="text-center text-white mb-10">
        <h1 className="text-4xl font-bold mb-6">
          Our <AnimatedUnderline>Services</AnimatedUnderline>
        </h1>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
          >
            {/* <div className="flex items-center mb-4"> */}
            <HoverCard>
              <FontAwesomeIcon icon={service.icon} size="2x" className="text-indigo-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </HoverCard>
          </div>
        ))
        }
      </div >
    </section >
  );
};

export default Services;
