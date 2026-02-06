import { useState } from 'react';

interface ButtonsProps {
  onYesClick: () => void;
  onNoHoverCount: (count: number) => void;
}

export default function Buttons({ onYesClick, onNoHoverCount }: ButtonsProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const handleNoHover = () => {
    const newCount = hoverCount + 1;
    setHoverCount(newCount);
    onNoHoverCount(newCount);

    // Calculate random position with padding from edges
    const padding = 100;
    const maxWidth = window.innerWidth - padding * 2;
    const maxHeight = window.innerHeight - padding * 2;

    const randomTop = Math.random() * maxHeight + padding;
    const randomLeft = Math.random() * maxWidth + padding;

    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  // Determine button text and color based on hover count
  const isMaybe = hoverCount >= 3;
  const buttonText = isMaybe ? 'Maybe' : 'No';
  const buttonColor = isMaybe ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600';

  return (
    <div className="flex gap-8">
      <button
        onClick={onYesClick}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-xl uppercase transition-colors"
      >
        Yes
      </button>
      <button
        onMouseEnter={handleNoHover}
        className={`${buttonColor} text-white font-bold py-4 px-12 rounded-full text-xl uppercase transition-colors`}
        style={
          hoverCount > 0
            ? {
                position: 'absolute',
                top: `${noButtonPosition.top}px`,
                left: `${noButtonPosition.left}px`,
              }
            : undefined
        }
      >
        {buttonText}
      </button>
    </div>
  );
}
