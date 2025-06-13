'use client';

import { useState } from 'react';
import AudioCard from './AudioCard';

const AudioList = ({ audioData }) => {
  const [playingId, setPlayingId] = useState(null);

  return (
    <div className="w-full  flex flex-wrap justify-center gap-5">
      {audioData.map(({ id, title, url }) => (
        <AudioCard
          key={id}
          id={id}
          title={title}
          audioUrl={url}
          isPlaying={playingId === id}
          onPlay={setPlayingId}
        />
      ))}
    </div>
  );
};

export default AudioList;
