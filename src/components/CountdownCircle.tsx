import { useState, useEffect } from 'react';

const CountdownCircle = ({ onStart }: { onStart: () => void }) => {
  const [count, setCount] = useState(5);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    if (count === 0) {
      setShowText(false);
      if (onStart) onStart();
      return;
    }

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onStart]);

  if (count === 0 && !showText) return null;

  return (
    <div className="bg-black-100 flex items-center justify-center">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="relative flex h-64 w-64 items-center justify-center">
          {/* 외부 원 */}
          <div className="absolute h-full w-full rounded-full border-4 border-green-300" />

          {/* 텍스트 */}
          <div className="flex flex-col items-center justify-center">
            {count === 5 && showText && <p className="mb-2 text-xl font-bold text-green-700">준비해주세요</p>}
            {count < 5 && showText && <span className="text-7xl font-bold text-green-600">{count}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownCircle;
