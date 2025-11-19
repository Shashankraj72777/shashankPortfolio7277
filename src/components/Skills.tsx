import { Code, Database, Layout, Palette, Server, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Layout size={40} />,
      title: 'Frontend Development',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      hoverBg: 'hover:from-cyan-500/20 hover:to-blue-500/20',
      lightColor: 'from-cyan-400 to-blue-400',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML5/CSS3'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Server size={40} />,
      title: 'Backend Development',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      hoverBg: 'hover:from-purple-500/20 hover:to-pink-500/20',
      lightColor: 'from-purple-400 to-pink-400',
      skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'],
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Database size={40} />,
      title: 'Database & Cloud',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      hoverBg: 'hover:from-pink-500/20 hover:to-rose-500/20',
      lightColor: 'from-pink-400 to-rose-400',
      skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'AWS', 'Docker'],
      image: 'https://images.pexels.com/photos/7014029/pexels-photo-7014029.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Palette size={40} />,
      title: 'Design & UI/UX',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      hoverBg: 'hover:from-orange-500/20 hover:to-yellow-500/20',
      lightColor: 'from-orange-400 to-yellow-400',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Animation', 'Prototyping', 'User Research'],
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Code size={40} />,
      title: 'Tools & Technologies',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      hoverBg: 'hover:from-green-500/20 hover:to-emerald-500/20',
      lightColor: 'from-green-400 to-emerald-400',
      skills: ['Git', 'VS Code', 'Linux', 'CI/CD', 'Webpack', 'Vite'],
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Soft Skills',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      hoverBg: 'hover:from-indigo-500/20 hover:to-purple-500/20',
      lightColor: 'from-indigo-400 to-purple-400',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management', 'Agile', 'Leadership'],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 right-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-0 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          A comprehensive set of technologies and tools I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border ${category.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>

              <div className="relative p-8 h-full">
                <div className={`${category.bgColor} w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${category.borderColor}`}>
                  <div className={`bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{
                  background: 'linear-gradient(135deg, var(--tw-gradient-stops))',
                }}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'React/Next.js',
                level: 95,
                icon: '⚛️',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                name: 'TypeScript',
                level: 90,
                icon: '📘',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Node.js',
                level: 88,
                icon: '🟢',
                color: 'from-green-500 to-emerald-500'
              },
              {
                name: 'UI/UX Design',
                level: 85,
                icon: '🎨',
                color: 'from-purple-500 to-pink-500'
              },
            ].map((skill, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-gray-300 font-medium text-sm block">{skill.name}</span>
                  </div>
                  <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} text-transparent bg-clip-text`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg shadow-${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { count: '50+', label: 'Projects Completed', icon: '🚀' },
            { count: '100+', label: 'Happy Clients', icon: '😊' },
            { count: '5+', label: 'Years Experience', icon: '⭐' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text mb-2">
                {stat.count}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
