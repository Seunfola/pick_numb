const NumberPickerButton = ({ onPickNumber, disabled }) => (
    <div className="flex justify-center">
        <button
            onClick={onPickNumber}
            disabled={disabled}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            Pick a Number
        </button>
    </div>
);

export default NumberPickerButton;
