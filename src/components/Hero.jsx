import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24 pt-40" id="home">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Sanowar</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-Stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide"></p>
          <div className="flex gap-x-4 mt-4">
            <a target="_blank" href="https://github.com/Sanowar72">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-sanowar-alam-792251236/"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a target="_blank" href="mailto:mdsanowaralam79@gmail.com">
              <IoMdMail className="h-9 w-9 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
