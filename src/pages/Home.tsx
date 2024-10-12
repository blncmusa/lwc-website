import React from 'react';
// import { Link } from 'react-router-dom';
import HeroImage from "./../components/home-components/HeroImage"
import HeroText from "../components/home-components/HeroText"
import InfoBubble from '../components/home-components/InfoBubble';
import ContactBubble from '../components/home-components/ContactBubble';
import SectionAbout from "../components/home-components/about-components/SectionAbout"

import "../index.css"

const Home: React.FC = () => {
  return (
    <div>
    <div className="w-full flex justify-center bg-theme mb-[15rem] relative">
      <main className='flex flex-col md:flex-row w-full items-center justify-center max-w-[70rem] px-4 my-10 pb-[4rem] h-[60vh]'>
        <HeroText/>
        <HeroImage/>
      </main>
      <section className='absolute flex bottom-[-10rem] justify-center space-x-4'>
        <InfoBubble/>
        <ContactBubble/>
      </section>
    </div>
    <section>
        <SectionAbout/>
    </section>
    </div>
  );
};

export default Home;
