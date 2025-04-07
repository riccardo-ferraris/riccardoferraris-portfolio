import React from 'react'
import imgPath from '../../assets/miaFoto.jpg'
import CVPath from '../../assets/CV EN Ferraris.pdf'

const Home = () => {
    const commonTitleStyle = 'text-5xl md:text-7xl font-bold 2xl:text-left '

    return (
        <section id='home' className='pt-24 2xl:pt-0 min-h-screen flex flex-col-reverse 2xl:flex-row items-center justify-around relative mx-[10%]'>
            <div className='z-10 px-4 w-full max-w-xl 2xl:max-w-2xl text-center 2xl:text-left'>
                <h1 className={commonTitleStyle + 'my-3'}>Hi, I'm</h1>
                <h1 className={commonTitleStyle + 'mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right'}>
                    Riccardo Kevin Ferraris
                </h1>

                <p className='text-gray-400 text-lg 2xl:text-left mb-8 mx-auto 2xl:mx-0'>
                    I'm a Frontend Web Developer who loves transforming ideas into smooth,
                    interactive web experiences. With a degree in Computer Science from the University of Salerno,
                    I focus on creating clean, accessible interfaces using React, Tailwind CSS and others. <br />
                    My goal? Make the web a more intuitive and enjoyable place, one project at a time.
                </p>

                <div className='flex flex-row justify-center 2xl:justify-start gap-4'>
                    <a href={CVPath} download
                        className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:cursor-pointer'
                    >
                        Download my CV
                    </a>

                    <a
                        href="#contact"
                        className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                    duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10'
                    >
                        Contact Me
                    </a>
                </div>


            </div>
            <div className='relative w-80 h-80 xl:w-100 xl:h-100 z-0'>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 blur-xl animate-blob opacity-70"></div>
                <img src={imgPath} alt="Mia foto"
                    className="w-full h-full object-cover border-4 border-white relative z-10 animate-blob"
                />
            </div>
        </section>
    )
}

export default Home