import React from 'react';
import SkillCard from './SkillCard';
import { Star } from 'lucide-react';

const About = () => {
  return (
    <section className=" bg-[#011111] flex flex-col justify-start p-10 items-center gap-10">
      <h1 className="text-primary text-5xl font-bold text-center">Why choose me?</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
        <SkillCard
          icon={Star}
          title="Self-Taught Expertise"
          description="I’ve learned everything hands-on, which means I know what works in the real world — not just the textbook."
        />
        <SkillCard
          icon={Star}
          title="Fast, Reliable Delivery"
          description="Deadlines matter. I deliver high-quality results quickly, without compromising on quality."
        />
        <SkillCard
          icon={Star}
          title="Affordable for Independent Artists"
          description="I keep my rates fair so passionate artists like you can get pro sound without breaking the bank."
        />
      </div>
    </section>
  );
};

export default About;
