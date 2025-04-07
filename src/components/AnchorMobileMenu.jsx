import React from 'react'

const AnchorMobileMenu = ({ children, menuOpen, ...props }) => {
    return (
        <a {...props} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
            {children}
        </a>
    )
}

export default AnchorMobileMenu