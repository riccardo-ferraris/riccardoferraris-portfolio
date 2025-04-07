import React from 'react'
import Chip from './Chip'

const CardSkill = ({ title, skills }) => {
    return (
        <div className="rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) =>
                    <Chip key={index} text={skill} />
                )}
            </div>
        </div>
    )
}

export default CardSkill