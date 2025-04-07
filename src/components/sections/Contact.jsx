import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '../Input'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import SocialAnchor from '../SocialAnchor'

const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = values;
        let newErrors = {};

        if (!name || !nameRegex.test(name)) {
            newErrors.name = 'Please enter a valid name.';
        }

        if (!email || !emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!message || message.length < 10) {
            newErrors.message = 'Please enter a message with at least 10 characters.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSending(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                values,
                import.meta.env.VITE_PUBLIC_KEY);
            toast.success('Email sent successfully!');

            resetForm();
            resetErrors();
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send email. Please try again later.');
        } finally {
            setIsSending(false);
        }
    }

    function handleInputChange(identifier, event) {
        setValues(prevValues => ({
            ...prevValues,
            [identifier]: event.target.value
        }));
    }

    function resetForm() {
        setValues({
            name: '',
            email: '',
            message: ''
        });
    }

    function resetErrors() {
        setErrors({});
    }

    return (
        <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.2 }}
                className='px-4 w-150'
            >
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent text-center'>Get In Touch</h2>

                <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        placeholder='Name...'
                        value={values.name}
                        onChange={(e) => handleInputChange('name', e)}
                        error={errors.name}
                    />
                    <Input
                        type='email'
                        placeholder='example@gmail.com'
                        value={values.email}
                        onChange={(e) => handleInputChange('email', e)}
                        error={errors.email}
                    />
                    <Input
                        type='text'
                        textarea
                        placeholder='Explain your project...'
                        value={values.message}
                        onChange={(e) => handleInputChange('message', e)}
                        error={errors.message}
                    />

                    <button
                        type='submit'
                        disabled={isSending}
                        className={`w-full py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            ${isSending
                                ? 'bg-gray-400 cursor-not-allowed' :
                                `bg-blue-500 text-white hover:-translate-y-0.5 
                                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:cursor-pointer`}`}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>

                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </form>

                <div className="flex justify-center gap-6 mt-10 text-2xl text-white">
                    <SocialAnchor
                        icon={<FaGithub />}
                        href="https://github.com/riccardo-ferraris"
                        className="hover:text-purple-900 transition-colors"
                    />

                    <SocialAnchor
                        icon={<FaLinkedin />}
                        href="https://www.linkedin.com/in/riccardo-kevin-ferraris-104481231/"
                        className="hover:text-blue-600 transition-colors"
                    />

                    <SocialAnchor
                        icon={<FaInstagram />}
                        href="https://www.instagram.com/riccardo__ferraris/"
                        className="hover:text-purple-500 transition-colors"
                    />

                    <SocialAnchor
                        icon={<FaWhatsapp />}
                        href="https://wa.me/393518606455"
                        className="hover:text-green-500 transition-colors"
                    />
                </div>

            </motion.div>
        </section>
    )
}

export default Contact