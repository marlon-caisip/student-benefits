// src/components/guides/DevPathGuide.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map, Code, Server, Cloud, Shield, Smartphone, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

const DevPathGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paths = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-400',
      description: 'Build user interfaces and create engaging web experiences',
      skills: ['HTML/CSS', 'JavaScript/TypeScript', 'React/Vue/Angular', 'Responsive Design', 'Web Performance'],
      roadmapUrl: 'https://roadmap.sh/frontend',
      ideal: 'Creative problem-solvers who love visual design and user experience'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-400',
      description: 'Build servers, APIs, and handle data processing',
      skills: ['Node.js/Python/Java', 'Databases (SQL/NoSQL)', 'RESTful APIs', 'Authentication', 'Server Management'],
      roadmapUrl: 'https://roadmap.sh/backend',
      ideal: 'Logical thinkers who enjoy working with data and system architecture'
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      icon: Cloud,
      color: 'text-purple-400',
      description: 'Master both frontend and backend to build complete applications',
      skills: ['Frontend + Backend', 'DevOps Basics', 'Database Design', 'API Design', 'System Architecture'],
      roadmapUrl: 'https://roadmap.sh/full-stack',
      ideal: 'Versatile developers who want to understand the entire application stack'
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      icon: Shield,
      color: 'text-orange-400',
      description: 'Automate deployment, manage infrastructure, and ensure reliability',
      skills: ['CI/CD', 'Docker/Kubernetes', 'Cloud Platforms', 'Monitoring', 'Infrastructure as Code'],
      roadmapUrl: 'https://roadmap.sh/devops',
      ideal: 'Automation enthusiasts who enjoy optimizing systems and processes'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-pink-400',
      description: 'Create native or cross-platform mobile applications',
      skills: ['React Native/Flutter', 'iOS/Android', 'Mobile UI/UX', 'App Store Deployment', 'Mobile Performance'],
      roadmapUrl: 'https://roadmap.sh/react-native',
      ideal: 'Developers passionate about mobile-first experiences and app ecosystems'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      <div className="gradient-blob guide-blob-1 fixed" />
      <div className="gradient-blob guide-blob-2 fixed" />
      <div className="gradient-blob guide-blob-3 fixed" />
      <div className="gradient-blob guide-blob-4 fixed" />
      <div className="gradient-blob guide-blob-5 fixed" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Map className="w-12 h-12 text-purple-500" />
            <h1 className="text-5xl font-black text-white">
              Choose Your Dev Path
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore different development career paths and find the perfect fit for your skills and interests using Roadmap.sh
          </p>
        </div>

        {/* What is Roadmap.sh */}
        <section className="mb-16">
          <div className="liquid-glass-strong rounded-xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">What is Roadmap.sh?</h2>
            <p className="text-gray-300">
              <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-semibold">Roadmap.sh</a> is a community-driven platform that provides clear, step-by-step learning paths for various tech roles. Each roadmap shows you exactly what to learn, in what order, and why it matters.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                <h3 className="font-bold text-white mb-1">Free & Open Source</h3>
                <p className="text-gray-400 text-sm">Completely free, community-maintained resources</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <CheckCircle className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-bold text-white mb-1">Visual Learning Paths</h3>
                <p className="text-gray-400 text-sm">Interactive diagrams showing your learning journey</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <CheckCircle className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="font-bold text-white mb-1">Curated Resources</h3>
                <p className="text-gray-400 text-sm">Best tutorials, docs, and courses for each topic</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Career Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {paths.map((path) => {
              const IconComponent = path.icon;
              return (
                <div key={path.id} className="liquid-glass-strong rounded-xl p-6 hover:scale-105 transition-transform">
                  <div className="flex items-start gap-4 mb-4">
                    <IconComponent className={`w-10 h-10 ${path.color}`} />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{path.title}</h3>
                      <p className="text-gray-400">{path.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY SKILLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill) => (
                        <span key={skill} className="bg-black/40 px-3 py-1 rounded-full text-xs text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">IDEAL FOR</h4>
                    <p className="text-gray-300 text-sm">{path.ideal}</p>
                  </div>

                  <a
                    href={path.roadmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="claim-btn w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2"
                  >
                    View Roadmap <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* How to Use Roadmap.sh */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Use Roadmap.sh Effectively</h2>
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">1. Start with Fundamentals</h3>
                <p className="text-gray-300">Don't skip the basics! Every roadmap starts with foundational skills. Master these before moving to advanced topics.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-300 mb-3">2. Follow the Flow</h3>
                <p className="text-gray-300">Roadmaps show dependencies. Learn topics in the suggested order to build knowledge progressively.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-300 mb-3">3. Build Projects</h3>
                <p className="text-gray-300">Apply what you learn immediately. Build small projects for each new skill to reinforce learning.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">4. Track Progress</h3>
                <p className="text-gray-300">Create a free account to save your progress and see how far you've come on your journey.</p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Pro Tip:</strong> You don't need to learn everything on a roadmap. Focus on the "must-knows" first, then explore based on your interests and job requirements.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Combining with Student Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Learn with Your Student Benefits</h2>
          <div className="liquid-glass-strong rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              Use your GitHub Student Developer Pack benefits to practice skills from your chosen roadmap:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Frontend → Use Figma & Canva Pro</p>
                  <p className="text-gray-400 text-sm">Design mockups before coding. Practice UI/UX skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Backend → Deploy on DigitalOcean</p>
                  <p className="text-gray-400 text-sm">Build and deploy real APIs with your $200 credit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Full-Stack → GitHub Copilot</p>
                  <p className="text-gray-400 text-sm">Speed up development with AI pair programming.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">DevOps → Azure/AWS Credits</p>
                  <p className="text-gray-400 text-sm">Practice cloud infrastructure and CI/CD pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link 
            to="/maximize" 
            className="claim-btn inline-flex items-center gap-2 py-3 px-8 rounded-xl font-semibold text-sm tracking-wide"
          >
            ← Back to Maximize Guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevPathGuide;
