import { FaStar } from "react-icons/fa"
import { useState } from "react"

const StarInput = ({ review, setReview, errors }) => {
    const ratingLabels = {
        1: "Very Poor",
        2: "Poor",
        3: "Average",
        4: "Good",
        5: "Excellent"
    };

    const [hoveredStar, setHoveredStar] = useState(null);

    return (
        <>
            <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        onClick={() =>
                            setReview((prev) => ({
                                ...prev,
                                rating: star
                            }))
                        }
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(null)}
                        className="focus:outline-none"
                    >
                        <FaStar
                            className={`h-6 w-6 transition-colors ${(hoveredStar || review.rating) >= star
                                ? "text-yellow-400"
                                : "text-gray-500"
                                }`}
                        />
                    </button>
                ))}
            </div>

            {errors.rating && (
                <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
            )}
        </>
    )
}

export default StarInput