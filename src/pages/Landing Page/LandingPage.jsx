import React from 'react';
import '../../App.css';

const LandingPage = () => {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center bg-cover bg-center text-white h-screen">
        <div className="absolute inset-0 bg-[rgba(74,54,47,0.38)] z-1"></div>
        <h1 className="z-2 text-4xl font-monserrat">Bienvenidos a</h1>
        <h2 className="z-2 text-8xl font-fjalla">COFFEE TECH</h2>
      </section>
    </>
  );
};

export default LandingPage;