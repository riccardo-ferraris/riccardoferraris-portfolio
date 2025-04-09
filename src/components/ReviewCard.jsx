import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const getInitials = name => name.split(" ").map((n) => n[0]).join("").toUpperCase();

const renderStars = rating => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }

    return <div className="flex gap-1 mb-2">{stars}</div>;
}

const ReviewCard = ({ name, role, content, rating }) => {
    return (
        <div className="min-w-[300px] max-w-xs bg-white/5 border border-white/10 p-6 rounded-xl shadow-md backdrop-blur-md mx-4">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {getInitials(name)}
                </div>
                <div>
                    <h4 className="font-bold text-white">{name}</h4>
                    <p className="text-sm text-blue-400">{role}</p>
                </div>
            </div>

            {renderStars(rating)}

            <p className="text-gray-300 text-sm">“{content}”</p>
        </div>
    );
};

export default ReviewCard;
