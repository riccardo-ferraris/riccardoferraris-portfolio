import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CardProject from '../CardProject'

const projects = [
    {
        "title": "Serena Ferraris Portfolio",
        "description": "A personal portfolio website focused on photography, developed to showcase the work and style of Serena Ferraris. The site features a clean, responsive design highlighting her photo collections, professional background, and contact information.",
        "techs": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        "repo": "https://serenaferraris.com/",
        "categories": ["frontend"]
    },
    {
        "title": "Perspective Art",
        "description": "A university e-commerce project for selling artworks, built using JavaScript, HTML, CSS, and Java (Servlets). It includes user authentication, product browsing, and basic cart functionalities.",
        "techs": ["JavaScript", "HTML", "CSS", "Java", "Servlets"],
        "repo": "https://github.com/riccardo-ferraris/Progetto-TSW",
        "categories": ["fullstack"]
    },
    {
        "title": "JW Territori",
        "description": "A fully functional personal app built with Flutter to manage a registry of internal documents for JW congregations. It provides tools for organizing and tracking field ministry territories, helping maintain accurate and efficient records.",
        "techs": ["Dart", "Flutter", "Firebase"],
        "repo": "https://github.com/riccardo-ferraris/JW-Territori",
        "categories": ["fullstack", "mobile"]
    },
    {
        "title": "Workout Tracker",
        "description": "A mobile app built with Flutter that allows users to track their workout routines, set goals, and monitor progress over time. It includes Firebase integration for authentication and data storage.",
        "techs": ["Dart", "Flutter", "Firebase"],
        "repo": "https://github.com/riccardo-ferraris/Workout-Tracker",
        "categories": ["fullstack", "mobile"]
    },
    {
        "title": "Mental Health App",
        "description": "A non-functional mobile frontend prototype developed with Flutter, focused on mental well-being. It presents a visually polished UI featuring guided exercises, motivational content, and placeholder sections for stress and anxiety support tools.",
        "techs": ["Dart", "Flutter"],
        "repo": "https://github.com/riccardo-ferraris/Mental-Health-App",
        "categories": ["frontend", "mobile"]
    },
    {
        "title": "MasterMind",
        "description": "A fully functional mobile version of the classic logic game MasterMind, built with Flutter. The app challenges users to guess a hidden code through logical deduction, following the original game's cryptographic-inspired rules.",
        "techs": ["Dart", "Flutter"],
        "repo": "https://github.com/riccardo-ferraris/MasterMind",
        "categories": ["frontend", "mobile"]
    }
]

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = projects.filter(project =>
        selectedCategory === 'all' || project.categories.includes(selectedCategory)
    );

    return (
        <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.2 }}
                className='max-w-5xl mx-auto px-4'
            >
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent text-center">Featured Projects</h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {["all", "frontend", "backend", "mobile", "fullstack"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`relative text-sm font-medium px-4 py-2 transition-all duration-300
                                    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
                                    before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 
                                    before:transition-all before:duration-300 before:origin-left
                                    hover:before:w-full hover:cursor-pointer
                                    ${selectedCategory === category
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 before:w-full'
                                    : 'text-gray-400 hover:text-white'}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) =>
                            <CardProject
                                key={index}
                                title={project.title}
                                description={project.description}
                                techs={project.techs}
                                repo={project.repo}
                            />
                        )
                    ) : (
                        <motion.div
                            className="col-span-full min-h-screen text-center text-gray-400 py-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="text-lg">🚧 Work in progress...</p>
                            <p className="text-sm mt-2 text-gray-500">New projects coming soon in this category.</p>
                        </motion.div>
                    )
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Projects