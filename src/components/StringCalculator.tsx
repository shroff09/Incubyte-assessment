import React, { useState } from 'react';
import { add } from '../utils/stringCalculator';

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers (e.g., 1,2,3)"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
      {result !== null && (
        <p className="mt-4 text-lg">Result: {result}</p>
      )}
      {error && (
        <p className="mt-4 text-red-500">{error}</p>
      )}
    </div>
  );
};

export default StringCalculator;