import fs from 'fs';
import path from 'path';
import AudioList from '@/components/AudioList';
import { Headphones } from 'lucide-react'; // ✅ Import icon

export default function MixPage() {
  const mixFolder = path.join(process.cwd(), 'public/Mixes');
  const files = fs
    .readdirSync(mixFolder)
    .filter((file) => file.endsWith('.wav'));

  const audioData = files.map((file, index) => ({
    id: index,
    title: file.replace('.wav', '').replace(/[-_]/g, ' '),
    url: `/Mixes/${file}`,
  }));

  return (
    <main className="min-h-screen p-6 flex flex-col items-center gap-6  text-white">
      <div className="flex items-center gap-2 text-xl text-gray-300">
        <Headphones className="w-6 h-6 text-primary" />
        <span>Headphones Recommended</span>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-6">
        <AudioList audioData={audioData} />
      </div>
    </main>
  );
}
