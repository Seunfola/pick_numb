const AvailableNumbers = ({ numbers }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Available Numbers:</h2>
            {numbers.length === 0 ? (
                <p className="text-gray-400">All numbers have been picked.</p>
            ) : (
                <ul className="grid grid-cols-2 gap-2">
                    {numbers.map((num) => (
                        <li key={num} className="bg-gray-800 rounded-md p-2 text-center text-white">
                            {num}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AvailableNumbers;
