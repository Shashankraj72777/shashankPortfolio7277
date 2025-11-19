import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Shashank Raj";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-500"></div>
        <div className="absolute w-72 h-72 bg-orange-500/10 rounded-full blur-3xl top-1/3 right-1/4 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-float">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 rounded-full"></div>
              <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text relative z-10">
                SR
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 min-h-[4rem]">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            {displayText}
          </span>
          <span className="animate-blink">|</span>
        </h1>

        <div
          className={`transition-all duration-1000 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xl md:text-3xl text-gray-300 mb-4 font-semibold">
            Full Stack Developer & Creative Designer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building stunning digital experiences with cutting-edge technologies. Specializing in scalable backends, beautiful frontends, and seamless user experiences.
          </p>

          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full hover:from-cyan-500/20 hover:to-blue-500/20 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-cyan-500/50 group"
            >
              <Github size={24} className="text-cyan-400 group-hover:text-cyan-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full hover:from-purple-500/20 hover:to-pink-500/20 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 group"
            >
              <Linkedin size={24} className="text-purple-400 group-hover:text-purple-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full hover:from-pink-500/20 hover:to-rose-500/20 border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-pink-500/50 group"
            >
              <Twitter size={24} className="text-pink-400 group-hover:text-pink-300" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full hover:from-orange-500/20 hover:to-yellow-500/20 border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-orange-500/50 group"
            >
              <Mail size={24} className="text-orange-400 group-hover:text-orange-300" />
            </a>
          </div>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block animate-bounce hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-gradient-to-b from-cyan-400 to-purple-400 p-0.5 rounded-full">
              <div className="bg-slate-900 p-2 rounded-full">
                <ArrowDown size={32} className="text-cyan-400" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
