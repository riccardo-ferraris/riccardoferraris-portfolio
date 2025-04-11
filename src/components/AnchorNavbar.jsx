import { useContext } from 'react'
import { ActiveSectionContext } from '../contexts/ActiveSectionContext'

const AnchorNavbar = ({ children, href }) => {
    const activeSection = useContext(ActiveSectionContext)
    const isActive = href === `#${activeSection}`

    const baseStyle = `
        relative text-base font-medium transition-colors duration-300 
        before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
        before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 
        before:transition-all before:duration-300 before:origin-left
        hover:before:w-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
    `

    const activeStyle = isActive
        ? `text-gray-300 xl:text-transparent xl:bg-clip-text xl:bg-gradient-to-r xl:from-blue-500 xl:to-purple-600 xl:before:w-full`
        : `text-gray-300`

    return (
        <a
            href={href}
            className={`${baseStyle} ${activeStyle}`}>
            {children}
        </a>
    )
}

export default AnchorNavbar
