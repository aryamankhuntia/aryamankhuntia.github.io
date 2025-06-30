export default function AboutSection() {
  const skills = [
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "React", icon: "fab fa-react", color: "text-blue-500" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Python", icon: "fab fa-python", color: "text-blue-600" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-slate-600" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn more about my background, skills, and passion for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            {/* Professional headshot placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Professional headshot" 
              className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-xl mb-8 border-4 border-white"
            />
            
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                [Write a brief introduction about yourself - your background, what drives you as a developer, 
                and what you're passionate about. Keep it personal but professional.]
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                [Add a second paragraph about your interests, goals, or what you enjoy doing when you're not coding. 
                This helps visitors connect with you on a personal level.]
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  <i className={`${skill.icon} text-3xl ${skill.color} mb-2`}></i>
                  <p className="font-medium text-slate-700">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
