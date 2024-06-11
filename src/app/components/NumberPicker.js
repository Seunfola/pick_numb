import { useState, useEffect } from 'react';
import NumberPickerButton from './NumberPickerButton';
import AvailableNumbers from './AvailableNumbers';

const NumberPicker = () => {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [availableNumbers, setAvailableNumbers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/numbers/available')
      .then((response) => response.json())
      .then((data) => setAvailableNumbers(data.availableNumbers))
      .catch((err) => setError('Failed to fetch available numbers.'));
  }, []);

  const pickNumber = async () => {
    try {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      const number = availableNumbers[randomIndex];
      const response = await fetch('/api/numbers/pick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || 'Failed to pick a number.');

      setAvailableNumbers(availableNumbers.filter((num) => num !== number));
      setPickedNumber(number);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pick a Number</h1>
      {pickedNumber ? (
        <div className="mb-4">You have picked number: {pickedNumber}</div>
      ) : (
        <NumberPickerButton onPickNumber={pickNumber} disabled={availableNumbers.length === 0} />
      )}
      <AvailableNumbers numbers={availableNumbers} />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default NumberPicker;
