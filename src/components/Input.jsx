import React from 'react'

const Input = ({ type, textarea = false, error, ...props }) => {
    const baseStyle = 'w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
    const errorStyle = error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-blue-500';
    const finalStyle = `${baseStyle} ${errorStyle}`;

    return (
        <div className='relative'>
            {!textarea ?
                <input
                    type={type}
                    id={type}
                    name={type}
                    className={finalStyle}
                    {...props}
                />
                : <textarea
                    id={type}
                    name={type}
                    rows={5}
                    className={finalStyle}
                    {...props}
                />
            }
            {error && <p className='text-red-500 text-sm py-1'>{error}</p>}
        </div>
    )
}

export default Input