import CardSkill from "../CardSkill";
import Timeline from "../Timeline";
import { motion } from "framer-motion";

const About = () => {
    const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "UI/UX Basics", "Responsive Design"];
    const backendSkills = ["Java", "Dart", "C#", "MySQL", "Python", "Firebase"];
    const toolsSkills = ["Git", "GitHub", "Visual Studio Code"];
    const softSkills = ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
                className="max-w-3xl mx-auto px-4"
            >
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-9 border-white/10 border">
                    <p className="text-gray-300 mb-6">
                        I'm a Frontend Web Developer with a degree in Computer Science from the University of Salerno.
                        I specialize in building responsive, accessible, and visually engaging web interfaces using
                        modern technologies like React, Tailwind CSS, and JavaScript. I’m passionate about clean code,
                        intuitive design, and creating user-centered experiences. In addition to my academic background,
                        I continuously improve my skills through personal projects and advanced courses, such as an in-depth
                        React course on Udemy. I enjoy tackling challenges, learning new technologies, and turning ideas into
                        functional, elegant web applications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CardSkill title="Frontend" skills={frontendSkills} />
                        <CardSkill title="Backend" skills={backendSkills} />
                        <CardSkill title="Tools" skills={toolsSkills} />
                        <CardSkill title="Soft Skills" skills={softSkills} />
                    </div>
                </div>

                <div className="py-6 px-0 md:px-6 mt-8 rounded-xl border-white/10 border">
                    <Timeline />
                </div>

            </motion.div>
        </section>
    )
}

export default About