
import { Star } from 'lucide-react';

const SkillCard = ({ icon: Icon = Star, title, description }) => {
  return (
    <div className="bg-black p-6 text-center w-full max-w-sm mx-auto shadow-md rounded-xl  flex flex-col h-70 items-center justify-center">
        <div>

      <div className="flex justify-center mb-4">
        <Icon className="text-primary w-8 h-8" />
      </div>
      <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
      <p className="text-white text-md leading-relaxed flex-grow">{description}</p>
    </div>
        </div>
  );
};

export default SkillCard;
