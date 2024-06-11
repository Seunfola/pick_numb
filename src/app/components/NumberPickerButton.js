const NumberPickerButton = ({ onPickNumber, disabled }) => {
    return (
        <button
            onClick={onPickNumber}
            disabled={disabled}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ backgroundColor: disabled ? 'rgba(59, 130, 246, 0.5)' : 'rgb(59, 130, 246)' }} // Dark mode background color
        >
            Pick a Number
        </button>

    );
};

export default NumberPickerButton;
