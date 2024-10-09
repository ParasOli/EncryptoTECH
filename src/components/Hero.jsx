import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const encrypto = "https://paras26.sirv.com/encrypto/Encrypto.gif"; 


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col items-center justify-center pt- `}>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 md:gap-10 lg:gap-20`}>
        <div className='flex flex-col justify-center items-start mt-10 md:mt-20 lg:mt- w-full'>
          <div className='flex flex-col justify-center items-start'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <span className='text-3xl'>Welcome to </span>
              <span className='text-[#915EFF] text-5xl'>Encrypto TECH</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100`}>
              We specialize in cybersecurity solutions and cutting-edge web development.
            </p>
          </div>

          </div>
        </div>
        <div className="flex justify-center items-center  ">
            <img
              src={encrypto}
              className="max-w-xs h-auto md:max-w-md lg:max-w-lg"
              alt="Description"
            />
      </div>
    </section>
  );
};

export default Hero;
