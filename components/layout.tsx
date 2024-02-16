'use client'
import React, { useState } from 'react';
import * as math from 'mathjs';

const Layout: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [expression, setExpression] = useState<string>('');

  const handleButtonClick = (value: string): void => {
    console.log('Button clicked:', value);

    if (value === '=') {
      try {
        setResult(math.evaluate(expression));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  console.log('Expression:', expression);
  console.log('Result:', result);

  return (
    <main className="flex  min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-gradient-to-b from-slate-300 to-slate-500 w-[400px] p-6 rounded-lg shadow-2xl shadow-neutral-800 border-double border-[6px] border-white">
        <input
          type="text"
          className="w-full mb-2 text-3xl border-double border-lime-600 shadow-2xl shadow-orange-400 border-[9px] p-2 text-black focus:outline-none"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl font-bold border-double border-lime-600 shadow-2xl shadow-orange-400 border-[9px] p-2  mb-4 text-black focus:outline-none"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-xl bg-gradient-to-r from-cyan-800 to-emerald-400 w-20 h-16 hover:bg-gradient-to-tr p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Layout;
