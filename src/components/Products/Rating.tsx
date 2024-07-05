const Rating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starPath = (
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.918 5.773 1.396 8.154L12 18.897l-7.346 3.867 1.396-8.154L.132 9.21l8.2-1.192z" />
    );

    return (
        <div className="flex gap-2">
            {[...Array(fullStars)].map((_, index) => (
                <svg
                    key={`full-${index}`}
                    className="w-6 h-6 text-primary fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    {starPath}
                </svg>
            ))}
            {hasHalfStar && (
                <svg
                    key={`half-${fullStars}`}
                    className="w-6 h-6 text-primary fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <defs>
                        <linearGradient id={`half-${fullStars}`}>
                            <stop offset="50%" stopColor="#4452fe" />
                            <stop offset="50%" stopColor="rgba(137, 136, 137, 100)" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <path fill={`url(#half-${fullStars})`} d={starPath.props.d} />
                </svg>
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <svg
                    key={`empty-${index}`}
                    className="w-6 h-6 text-gray-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    {starPath}
                </svg>
            ))}
        </div>
    );
};


export default Rating;
