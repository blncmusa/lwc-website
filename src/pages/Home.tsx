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
    <div className="w-full flex justify-center bg-theme mb-[250px]">
      <main className='flex flex-col md:flex-row w-full items-center justify-center max-w-[1500px] px-4 my-[0px] pb-[70px] h-[900px]'>
        <HeroText/>
        <HeroImage/>
      </main>
      <section className='absolute flex bottom-[-180px] justify-center space-x-[100px]'>
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
