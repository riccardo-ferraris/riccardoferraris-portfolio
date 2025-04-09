import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CardProject from '../CardProject'
import projects from '../../projects'

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
                                image={project.image}
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