import spiderMan from '@/assets/spider-man.png';
import { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => setCount((prev) => prev + 1);

  return (
    <div className="container">
      <h2 className="text-lg text-green-400">{count}</h2>
      <button
        onClick={handleIncrementCount}
        className="border py-2 px-4 rounded-xl"
      >
        INCREMENT
      </button>
      <img src={spiderMan} alt="spider man" className="w-10 h-10" />
      <h1>About page</h1>
    </div>
  );
};

export default About;
