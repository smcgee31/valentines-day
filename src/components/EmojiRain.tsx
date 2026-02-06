interface EmojiRainProps {
  emoji: '❤️' | '😭';
}

export default function EmojiRain({ emoji }: EmojiRainProps) {
  // Generate 40 emojis with random properties
  const emojiCount = 40;
  const emojis = Array.from({ length: emojiCount }, (_, index) => {
    const leftPosition = Math.random() * 100; // 0-100% viewport width
    const animationDelay = Math.random() * 2; // 0-2s delay
    const animationDuration = 2 + Math.random() * 2; // 2-4s duration

    return (
      <div
        key={index}
        className="absolute text-4xl pointer-events-none"
        style={{
          left: `${leftPosition}%`,
          top: '0',
          animation: `fall ${animationDuration}s linear ${animationDelay}s infinite`,
        }}
      >
        {emoji}
      </div>
    );
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {emojis}
    </div>
  );
}
