import React from 'react'

const Chip = ({ text }) => {
    return (
        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                        text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        hover:cursor-default">
            {text}
        </span>
    )
}

export default Chip