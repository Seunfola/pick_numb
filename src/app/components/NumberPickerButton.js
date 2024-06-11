const NumberPickerButton = ({ onPickNumber, disabled }) => {
    return (
        <button
            onClick={onPickNumber}
            disabled={disabled}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            Pick a Number
        </button>
    );
};

export default NumberPickerButton;
