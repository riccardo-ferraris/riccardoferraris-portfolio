import React from 'react'

const AnchorNavbar = ({ children, className = '', ...props }) => {
    const style = `
        relative text-base font-medium text-gray-300 transition-colors duration-300 
        before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
        before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 
        before:transition-all before:duration-300 before:origin-left
        hover:before:w-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
    `

    return (
        <a {...props} className={`${style} ${className}`}>
            {children}
        </a>
    )
}

export default AnchorNavbar
