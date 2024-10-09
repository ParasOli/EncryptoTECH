import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-5 md:gap-10'>
      {technologies.map((technology) => (
        <div className='w-20 h-20 md:w-28 md:h-28 flex items-center justify-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
