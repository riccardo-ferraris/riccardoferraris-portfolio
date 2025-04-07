import React from 'react'

const SocialAnchor = ({ icon, ...props }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {icon}
        </a>
    )
}

export default SocialAnchor