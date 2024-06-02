import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <div className="py-5" id="about">
      <section className="bg-white py-20">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <img src={aboutSvg} className="w-full h-64" />
          <article>
            <SectionTitle text="About" />
            <p className="text-slate-600 mt-8 leading-loose">
              Hello! I’m Md Sanowar Alam from Banglore. I have completed
              Information Science and Engineering from,
              <a
                style={{ padding: "5px" }}
                className="underline font-bold text-emerald-500"
                href="https://www.brindavancollege.com/"
                target="_blank"
              >
                Brindavan College of Engineering.
              </a>
            </p>
            <p className="text-slate-600 leading-loose">
              I have a passion for creating web-based projects, whether it be
              developing websites, applications, or any related endeavors. My
              goal is to produce not only functional but also aesthetically
              pleasing and elegant user experiences. When I am not studying or
              working, I enjoy unwinding by watching movies and TV shows.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
