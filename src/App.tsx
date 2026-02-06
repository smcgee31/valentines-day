import { useState } from 'react';
import Title from './components/Title';
import Buttons from './components/Buttons';
import EmojiRain from './components/EmojiRain';

function App() {
  const [showButtons, setShowButtons] = useState(true);
  const [showEmojiRain, setShowEmojiRain] = useState(false);
  const [emojiType, setEmojiType] = useState<'❤️' | '😭' | null>(null);

  const handleYesClick = () => {
    setShowButtons(false);
    setEmojiType('❤️');
    setShowEmojiRain(true);
  };

  const handleNoHoverCount = (count: number) => {
    if (count === 6) {
      setShowButtons(false);
      setEmojiType('😭');
      setShowEmojiRain(true);
    }
  };

  return (
    <div className="h-dvh bg-pink-300 flex flex-col items-center justify-center p-8">
      <Title />
      {showButtons && <Buttons onYesClick={handleYesClick} onNoHoverCount={handleNoHoverCount} />}
      {showEmojiRain && emojiType && <EmojiRain emoji={emojiType} />}
    </div>
  );
}

export default App;
