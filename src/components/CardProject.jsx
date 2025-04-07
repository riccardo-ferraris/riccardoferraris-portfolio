import React from 'react'
import Chip from './Chip'

const CardProject = ({ title, description, techs, repo }) => {
    return (
        <div className='flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
            <div>
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
                <p className='text-gray-400 mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {techs.map((tech, index) =>
                        <Chip key={index} text={tech} />
                    )}
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <a
                    href={repo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-300 transition-colors mt-8 mb-4'
                >
                    View Project →
                </a>
            </div>
        </div>
    )
}

export default CardProject