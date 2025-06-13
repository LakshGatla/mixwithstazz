'use client';

import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause } from 'lucide-react';

const AudioCard = ({ audioUrl, title, isPlaying, onPlay, id }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#ccc',
      progressColor: 'oklch(0.888 0.2671 136.7)',
      height: 60,
      responsive: true,
      barWidth: 2,
      cursorColor: 'white',
    });

    wavesurfer.current.load(audioUrl);
    wavesurfer.current.on('finish', () => onPlay(null));

    return () => wavesurfer.current.destroy();
  }, [audioUrl]);

  useEffect(() => {
    if (!wavesurfer.current) return;
    if (isPlaying) wavesurfer.current.play();
    else wavesurfer.current.pause();
  }, [isPlaying]);

  const handleToggle = () => {
    if (isPlaying) {
      onPlay(null); // 🛑 Clear playing ID when paused
    } else {
      onPlay(id);    // ▶️ Start playing
    }
  };

  return (
    <div className="w-full max-w-xl p-4 bg-accent rounded-xl shadow flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <div className="flex items-center gap-4">
        <button onClick={handleToggle} className="p-3 bg-primary text-white rounded-full">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <div className="flex-1" ref={waveformRef}></div>
      </div>
    </div>
  );
};

export default AudioCard;
