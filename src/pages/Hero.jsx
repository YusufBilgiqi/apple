import React from "react";
import HeroImg from "../assets/images/hero-img.jpg";
import HeroImgSmall from "../assets/images/heroImgSmall.jpg";

const Hero = () => {
  return (
    <section className="bg-[url(./)]">
      <div className="hero-header flex flex-col  items-center mt-6">
        <h1>iPhone 15 Pro</h1>
        <h2 className="text-2xl">Titanium.Zo sterk.Zo licht. Zo Pro</h2>
        <div className="hero-btn-container">
          <button>
            Meer informatie
            <a href=""></a>
          </button>
          <button>
            Koop
            <a href=""></a>
          </button>
        </div>
        <a href=""></a>
      </div>
      <div>
        <img src={HeroImg} alt="" className="lg:show" />
      </div>
    </section>
  );
};

export default Hero;
