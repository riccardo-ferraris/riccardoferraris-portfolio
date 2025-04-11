import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '../components/Input'
import { nameRegex } from '../regex'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StarInput from './StarInput'
import emailjs from 'emailjs-com'

const ReviewForm = () => {
    const [review, setReview] = useState({
        name: '',
        role: '',
        text: '',
        rating: null,
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const { name, role, text, rating } = review;

        let newErrors = {};

        if (!name || !nameRegex.test(name)) {
            newErrors.name = 'Please enter a valid name.';
        }

        if (!role || role.length < 2) {
            newErrors.role = 'Please enter a valid role.';
        }

        if (!text || text.length < 20) {
            newErrors.text = 'Please enter a review with at least 20 characters.';
        }

        if (!rating || rating < 1 || rating > 5) {
            newErrors.rating = 'Please enter a rating between 1 and 5.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSending(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_REVIEW_TEMPLATE_ID,
                review,
                import.meta.env.VITE_PUBLIC_KEY);
            toast.success('Review sent successfully!');

            resetForm();
            resetErrors();
        } catch (error) {
            console.error('Error sending review:', error);
            toast.error('Failed to send review. Please try again later.');
        } finally {
            setIsSending(false);
        }
    }

    function handleInputChange(identifier, event) {
        setReview(prevValues => ({
            ...prevValues,
            [identifier]: event.target.value
        }));
    }

    function resetForm() {
        setReview({
            name: '',
            role: '',
            text: '',
            rating: 0,
        });
    }

    function resetErrors() {
        setErrors({});
    }


    return (
        <div className='min-h-screen flex items-center justify-center py-20'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.2 }}
                className='px-4 w-150'
            >
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                    bg-clip-text text-transparent text-center'>Drop a review</h2>

                <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        placeholder='Name...'
                        value={review.name}
                        onChange={(e) => handleInputChange('name', e)}
                        error={errors.name}
                    />
                    <Input
                        type='text'
                        placeholder='Your role...'
                        value={review.role}
                        onChange={(e) => handleInputChange('role', e)}
                        error={errors.role}
                    />
                    <StarInput review={review} setReview={setReview} errors={errors} />
                    <Input
                        type='text'
                        textarea
                        placeholder='Review...'
                        value={review.text}
                        onChange={(e) => handleInputChange('text', e)}
                        error={errors.text}
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
                        {isSending ? "Sending..." : "Send Review"}
                    </button>

                </form>
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
            </motion.div>
        </div>
    );
}

export default ReviewForm