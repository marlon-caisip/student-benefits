// src/components/DigitalOceanGuide.tsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Lock, Server, Zap, AlertCircle } from 'lucide-react';

const DigitalOceanGuide = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Animated gradient blobs - fixed background */}
      <div className="gradient-blob guide-blob-1 fixed" />
      <div className="gradient-blob guide-blob-2 fixed" />
      <div className="gradient-blob guide-blob-3 fixed" />
      <div className="gradient-blob guide-blob-4 fixed" />
      <div className="gradient-blob guide-blob-5 fixed" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Globe className="w-12 h-12 text-purple-500" />
            <h1 className="text-5xl font-black text-white">
              Host Your Portfolio on DigitalOcean
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete guide from claiming your $200 credit to deploying a professional portfolio with custom domain and SSL
          </p>
        </div>

        {/* Part 1: Claiming GitHub Student Pack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">1</span>
            Claiming the GitHub Student Developer Pack
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 1: Verify Your Student Status</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Go to <a href="https://education.github.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub Education</a></li>
                <li>Click <strong>"Get benefits"</strong> or <strong>"Join GitHub Education"</strong></li>
                <li>Click <strong>"Get student benefits"</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 2: Submit Your Application</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Select academic status:</strong> Choose "Student"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Select your school:</strong> Search for and select your institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Upload proof:</strong> Student ID, enrollment letter, or transcript
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Explain your use:</strong> 2-3 sentences about learning goals</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Pro Tip:</strong> Verification takes 1-7 days. Check your email for approval!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Claiming DigitalOcean Credit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">2</span>
            Claiming Your $200 DigitalOcean Credit
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Access GitHub Pack Benefits</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Go to <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub Student Developer Pack</a></li>
                <li>Find <strong>DigitalOcean</strong> in the partners list</li>
                <li>Click <strong>"Get access by connecting your GitHub account"</strong></li>
                <li>Authorize DigitalOcean and create an account</li>
                <li>Add payment method for verification (won't be charged)</li>
              </ol>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-green-300 flex items-start gap-2">
                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Your credit:</strong> $200 valid for 1 year will be automatically applied!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 3: Deploying Your Site */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">3</span>
            Deploy Your Portfolio
          </h2>
          
          <div className="space-y-6">
            {/* Option A: App Platform */}
            <div className="liquid-glass-strong rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-purple-300">Option A: App Platform (Recommended)</h3>
              </div>
              <p className="text-gray-400 mb-4">Perfect for beginners - automatic deployments from GitHub!</p>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
                <li>In DigitalOcean, click <strong>Create → Apps</strong></li>
                <li>Choose <strong>GitHub</strong> as source</li>
                <li>Select your portfolio repository</li>
                <li className="space-y-2">
                  <div>Configure build settings:</div>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
                    <li>React: <code className="bg-gray-800 px-2 py-1 rounded">npm run build</code> → <code className="bg-gray-800 px-2 py-1 rounded">build</code></li>
                    <li>Static: No build command → <code className="bg-gray-800 px-2 py-1 rounded">./</code></li>
                  </ul>
                </li>
                <li>Choose <strong>Basic plan</strong> ($5/month)</li>
                <li>Click <strong>Create Resources</strong></li>
              </ol>

              <div className="mt-4 bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-purple-300 text-sm">
                  ✨ <strong>Result:</strong> Your site will be live at <code>yourapp.ondigitalocean.app</code> in 2-5 minutes!
                </p>
              </div>
            </div>

            {/* Option B: Droplet */}
            <div className="liquid-glass-strong rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-300">Option B: Droplet (Advanced)</h3>
              </div>
              <p className="text-gray-400 mb-4">Full control with your own server</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Create Droplet</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 text-sm">
                    <li>Image: Ubuntu 22.04 LTS</li>
                    <li>Plan: Basic $6/month (1GB RAM)</li>
                    <li>Authentication: SSH key recommended</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Install NGINX</h4>
                  <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-xs">
                    <code className="text-green-400">{`apt update && apt upgrade -y
apt install nginx -y
systemctl start nginx`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Deploy Your Files</h4>
                  <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-xs">
                    <code className="text-green-400">{`cd /var/www/html
git clone https://github.com/user/portfolio.git
mv portfolio/* .`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: Custom Domain */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">4</span>
            Add Custom Domain (FREE!)
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Claim Free Domain</h3>
              <p className="text-gray-300 mb-3">Through GitHub Student Pack, get:</p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span><strong>Namecheap:</strong> Free <code className="bg-gray-800 px-2 py-1 rounded">.me</code> domain for 1 year</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span><strong>.TECH:</strong> Free <code className="bg-gray-800 px-2 py-1 rounded">.tech</code> domain for 1 year</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Configure in DigitalOcean</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>App Platform: Settings → Domains → Add Domain</li>
                <li>Droplet: Networking → Domains → Create A Record</li>
                <li>Update nameservers at your registrar:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                    <li><code className="bg-gray-800 px-2 py-1 rounded">ns1.digitalocean.com</code></li>
                    <li><code className="bg-gray-800 px-2 py-1 rounded">ns2.digitalocean.com</code></li>
                    <li><code className="bg-gray-800 px-2 py-1 rounded">ns3.digitalocean.com</code></li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <p className="text-orange-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Patience:</strong> DNS propagation takes 1-48 hours</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 5: SSL Certificate */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">5</span>
            Enable HTTPS with FREE SSL
          </h2>
          
          <div className="space-y-6">
            {/* App Platform */}
            <div className="liquid-glass-strong rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-green-300">App Platform</h3>
              </div>
              <p className="text-gray-300 text-lg">
                ✨ <strong>Automatic!</strong> SSL is provided by default. Nothing to do! 🎉
              </p>
            </div>

            {/* Droplet */}
            <div className="liquid-glass-strong rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-300">Droplet with Let's Encrypt</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Install Certbot</h4>
                  <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-xs">
                    <code className="text-green-400">{`apt install certbot python3-certbot-nginx -y`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Get Certificate</h4>
                  <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-xs">
                    <code className="text-green-400">{`certbot --nginx -d yourname.me -d www.yourname.me`}</code>
                  </pre>
                  <p className="text-gray-400 text-sm mt-2">Follow prompts → Choose redirect HTTP to HTTPS</p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-300 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    <span><strong>Your site is now secure with HTTPS!</strong> 🔒</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🚀 Next Steps</h2>
          
          <div className="liquid-glass-strong rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Deploy your portfolio</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Add custom domain</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Enable SSL/HTTPS</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Share on LinkedIn</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Add to resume/CV</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Add analytics</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-2xl font-bold text-white mb-2">
                Congratulations! 🎉
              </p>
              <p className="text-gray-400">
                You now have a professional portfolio live on the internet!
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/maximize#guide-digitalocean-hosting" 
            onClick={() => {
              setTimeout(() => {
                const element = document.getElementById('guide-digitalocean-hosting');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 100);
            }}
            className="claim-btn inline-flex items-center gap-2 py-3 px-8 rounded-xl font-semibold text-sm tracking-wide"
          >
            ← Back to Maximize Guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalOceanGuide;
