import { Briefcase, GraduationCap, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Sparkles className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
                seamless digital experiences. I specialize in building modern, responsive web applications
                that not only look great but also deliver exceptional performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Heart className="text-purple-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Love</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I thrive on solving complex problems with elegant solutions. Whether it's crafting
                beautiful user interfaces, optimizing backend systems, or exploring new technologies,
                I'm always eager to learn and grow.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/30 p-8 rounded-2xl border border-pink-500/20 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <GraduationCap className="text-pink-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Bachelor's in Computer Science</h4>
                  <p className="text-gray-400">University Name</p>
                  <p className="text-gray-500 text-sm">2018 - 2022</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Certifications</h4>
                  <p className="text-gray-400">Full Stack Development, Cloud Computing</p>
                  <p className="text-gray-500 text-sm">2022 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Briefcase className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Senior Full Stack Developer</h4>
                  <p className="text-gray-400">Tech Company</p>
                  <p className="text-gray-500 text-sm">2022 - Present</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
                  <p className="text-gray-400">Startup Inc.</p>
                  <p className="text-gray-500 text-sm">2021 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
