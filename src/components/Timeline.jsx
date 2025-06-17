import React, { useState } from 'react';
import { motion } from 'framer-motion';

const educationData = [
    { year: 'feb 2025 - Present', title: 'Advanced React Course', place: 'Udemy' },
    { year: 'may 2025 - jun 2025', title: 'Academy Java & SQL', place: 'ItConsulting' },
    { year: 'sep 2020 - feb 2025', title: "Bachelor's Degree in Computer Science", place: 'University of Salerno' },
    { year: 'sep 2015 - sep 2020', title: 'Scientific High School Diploma', place: 'Liceo Caravaggio' },
];

const workData = [
    { year: '2025 - Present', title: 'Frontend Web Dev', place: 'Freelance' },
    { year: 'sep 2023 - feb 2024', title: 'Web Dev', place: 'Somma Vesuviana' },
];

const Timeline = () => {
    const [selected, setSelected] = useState('education');
    const data = selected === 'education' ? educationData : workData;

    return (
        <div className=" py-5 px-4 bg-black text-white">
            <div className="text-center mb-10">
                <div className="inline-flex gap-8 justify-center">
                    {['education', 'work'].map((type) => {
                        const isSelected = selected === type;
                        return (
                            <button
                                key={type}
                                onClick={() => setSelected(type)}
                                className={`relative font-semibold text-lg transition-all duration-300 hover:cursor-pointer
                                        ${isSelected
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'
                                        : 'text-gray-400 hover:text-white'}
                                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
                                            after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-600
                                            after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                                            ${isSelected ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                        `}>
                                {type === 'education' ? 'Education' : 'Work'}
                            </button>
                        );
                    })}
                </div>


            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />

                <ul className="space-y-16">
                    {data.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <li
                                key={index}
                                className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                <div className={`w-1/2 px-4`}>

                                    <motion.div
                                        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                        viewport={{ amount: 0.3 }}
                                        className="relative"
                                    >
                                        <span className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full 
                                            border-2 border-white z-10 ${isLeft ? '-right-6' : '-left-6'}`} />
                                        <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl shadow-md overflow-hidden">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-sm text-blue-400">{item.place}</p>
                                            <span className="text-sm text-gray-400">{item.year}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Timeline;
