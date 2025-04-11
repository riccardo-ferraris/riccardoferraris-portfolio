import reviews from "../../reviews";
import ReviewCard from "../ReviewCard";
import { motion } from "framer-motion";
import ReviewForm from "../ReviewForm";

const Reviews = () => {
    return (
        <section id="reviews" className="py-20 px-4 bg-black text-white overflow-hidden min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.2 }}
            >
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        What People Say
                    </h2>
                </div>

                <div className="overflow-hidden max-w-7xl mx-auto">
                    <div className="flex w-full gap-6 flex-wrap justify-center items-stretch">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>
                </div>

                <ReviewForm />
            </motion.div>
        </section>
    );
};


export default Reviews;
