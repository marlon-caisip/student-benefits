// src/components/guides/CapstoneHostingGuide.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';

const CapstoneHostingGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = async (code: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CodeBlock = ({ code, codeId }: { code: string, codeId: string }) => (
    <div className="relative group">
      <button
        onClick={() => copyToClipboard(code, codeId)}
        className="absolute top-3 right-3 p-2 rounded-lg bg-purple-600/80 hover:bg-purple-600 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Copy code"
      >
        {copiedCode === codeId ? (
          <Check className="w-4 h-4 text-green-300" />
        ) : (
          <Copy className="w-4 h-4 text-white" />
        )}
      </button>
      <pre className="bg-black p-4 rounded-lg overflow-x-auto overflow-y-auto max-h-[600px]" style={{ scrollbarColor: '#1a1a1a #000000', scrollbarWidth: 'thin' }}>
        <code className="text-sm text-gray-300">{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Animated gradient blobs */}
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
              Host Your Capstone Project
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deploy your capstone project to DigitalOcean and connect a custom domain from Name.com - all using your student credits
          </p>
        </div>

        {/* Part 1: Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">1</span>
            What You'll Build
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <p className="text-gray-300">
              By the end of this guide, you'll have your capstone project live on the internet with a professional custom domain. Perfect for showcasing your work to potential employers!
            </p>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">What You'll Need</h3>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>GitHub Student Pack:</strong> Get $200 DigitalOcean credit at <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">education.github.com/pack</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Name.com domain:</strong> Free .me domain from your student pack at <a href="https://www.name.com/partner/github-students" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">name.com/partner/github-students</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Your capstone project:</strong> Can be static HTML/CSS/JS, React, or any framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Basic terminal knowledge:</strong> We'll use some command line tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Pro tip:</strong> This guide works for any web project, not just capstones. Use it for portfolios, side projects, or hackathon demos!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Claim Your Domain */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">2</span>
            Claim Your Free .me Domain
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 1: Access Name.com Offer</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Verify you have the GitHub Student Pack active</li>
                <li>Visit <a href="https://www.name.com/partner/github-students" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">name.com/partner/github-students</a></li>
                <li>Sign up with your GitHub student email or connect your GitHub account</li>
                <li>Look for the "Get my free .me domain" offer</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 2: Choose Your Domain Name</h3>
              <p className="text-gray-300 mb-3">Pick a domain that represents you professionally:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>yourname.me</strong> - Perfect for personal portfolios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>yourproject.me</strong> - Great for showcasing specific projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>firstname-lastname.me</strong> - Professional and memorable</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <p className="text-yellow-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Important:</strong> Keep your domain name simple and professional. You'll use this for job applications!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 3: Deploy to DigitalOcean */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">3</span>
            Deploy to DigitalOcean
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Option A: Static Site (Recommended for Beginners)</h3>
              <p className="text-gray-300 mb-3">For HTML, CSS, JS, React, Vue, or other static sites:</p>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
                <li>Log into <a href="https://cloud.digitalocean.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">cloud.digitalocean.com</a></li>
                <li>Click "Create" → "App Platform"</li>
                <li>Connect your GitHub repository</li>
                <li>Select your capstone project repository</li>
                <li>Choose the branch to deploy (usually "main" or "master")</li>
                <li>Configure build settings:
                  <CodeBlock
                    codeId="build-settings"
                    code={`Build Command: npm run build
Output Directory: dist (or build, depending on your setup)
Environment: Node.js`}
                  />
                </li>
                <li>Select the "Basic" plan ($5/month - plenty of credits left over!)</li>
                <li>Click "Launch App"</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Option B: Full-Stack App</h3>
              <p className="text-gray-300 mb-3">For apps with a backend (Node.js, Python, etc.):</p>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
                <li>Same steps as Option A, but add environment variables</li>
                <li>In App Platform, go to "Settings" → "Environment Variables"</li>
                <li>Add any API keys, database URLs, or secrets your app needs</li>
                <li>Example for a Node.js/Express app:
                  <CodeBlock
                    codeId="env-vars"
                    code={`PORT=8080
DATABASE_URL=your_database_connection_string
API_KEY=your_api_key`}
                  />
                </li>
              </ol>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-green-300 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Auto-Deploy:</strong> DigitalOcean will automatically redeploy your app whenever you push to your GitHub repo. No manual work needed!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 4: Connect Your Domain */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">4</span>
            Connect Your Custom Domain
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 1: Get Your App's IP Address</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>In DigitalOcean App Platform, go to your app's "Settings"</li>
                <li>Click on "Domains"</li>
                <li>You'll see your default app URL (something like: <code className="text-purple-300">yourapp-xxxxx.ondigitalocean.app</code>)</li>
                <li>Click "Add Domain" and enter your Name.com domain</li>
                <li>DigitalOcean will show you DNS records to add - <strong>keep this page open!</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 2: Configure DNS at Name.com</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Log into <a href="https://www.name.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">name.com</a></li>
                <li>Go to "My Account" → "My Domains"</li>
                <li>Click on your domain → "Manage DNS Records"</li>
                <li>Add the DNS records that DigitalOcean provided:
                  <CodeBlock
                    codeId="dns-records"
                    code={`Type: A
Host: @
Answer: [DigitalOcean's IP]
TTL: 300

Type: CNAME
Host: www
Answer: [your-app].ondigitalocean.app
TTL: 300`}
                  />
                </li>
                <li>Click "Add Record" for each one</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 3: Enable SSL (HTTPS)</h3>
              <p className="text-gray-300 mb-3">Make your site secure with free SSL:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Back in DigitalOcean, wait for DNS to propagate (usually 5-30 minutes)</li>
                <li>Once DNS is verified, DigitalOcean will automatically enable SSL</li>
                <li>Your site will be accessible at both <code className="text-green-300">http://</code> and <code className="text-green-300">https://</code></li>
              </ol>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>DNS Propagation:</strong> It can take up to 48 hours for DNS changes to fully propagate worldwide, but usually it's much faster (5-30 minutes).</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 5: Optimization Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">5</span>
            Make It Production-Ready
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-purple-300 mb-2">📱 Add a Favicon</h4>
                <p className="text-gray-300 text-sm">Make your site look professional with a custom icon in the browser tab.</p>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-green-300 mb-2">🔍 SEO Meta Tags</h4>
                <p className="text-gray-300 text-sm">Add title, description, and Open Graph tags so it looks good when shared.</p>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-blue-300 mb-2">📊 Analytics</h4>
                <p className="text-gray-300 text-sm">Add Google Analytics or Plausible to track visitors (great for your resume!).</p>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">⚡ Performance</h4>
                <p className="text-gray-300 text-sm">Optimize images, minify code, and use a CDN for faster loading.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Example: Adding Meta Tags</h3>
              <CodeBlock
                codeId="meta-tags"
                code={`<!-- In your HTML <head> -->
<title>John Doe - Full Stack Developer Portfolio</title>
<meta name="description" content="Capstone project showcasing my skills in React, Node.js, and cloud deployment">
<meta property="og:title" content="John Doe - Portfolio">
<meta property="og:description" content="Check out my capstone project!">
<meta property="og:image" content="https://yoursite.me/preview.jpg">
<meta property="og:url" content="https://yoursite.me">`}
              />
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Common Issues & Fixes</h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-bold text-red-300 mb-2">❌ Build Failed</h4>
              <p className="text-gray-300 text-sm mb-2">Check your build logs in DigitalOcean. Usually caused by:</p>
              <ul className="text-gray-300 text-sm ml-4 list-disc">
                <li>Missing environment variables</li>
                <li>Wrong build command in settings</li>
                <li>Node version mismatch (add <code>.nvmrc</code> file)</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h4 className="font-bold text-yellow-300 mb-2">⚠️ Domain Not Working</h4>
              <p className="text-gray-300 text-sm mb-2">If your domain isn't connecting:</p>
              <ul className="text-gray-300 text-sm ml-4 list-disc">
                <li>Double-check DNS records match exactly</li>
                <li>Wait 30 minutes for DNS propagation</li>
                <li>Try accessing with <code>www.</code> prefix</li>
                <li>Clear your browser cache</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-bold text-blue-300 mb-2">ℹ️ SSL Certificate Pending</h4>
              <p className="text-gray-300 text-sm mb-2">If HTTPS isn't working yet:</p>
              <ul className="text-gray-300 text-sm ml-4 list-disc">
                <li>Wait for DNS to fully propagate first</li>
                <li>DigitalOcean auto-generates SSL certificates (can take 15-30 min)</li>
                <li>Check "Domains" section in your app for certificate status</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">You're Live! What's Next?</h2>
          
          <div className="liquid-glass-strong rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              Congratulations! Your capstone is now live with a custom domain. Here's how to make the most of it:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Add It to Your Resume</p>
                  <p className="text-gray-400 text-sm">Include the live link - recruiters love seeing deployed projects!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Share on LinkedIn</p>
                  <p className="text-gray-400 text-sm">Post about your achievement with a link to your live project.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Monitor Performance</p>
                  <p className="text-gray-400 text-sm">Use DigitalOcean's monitoring to track uptime and response times.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Keep It Updated</p>
                  <p className="text-gray-400 text-sm">Regular updates show you're actively maintaining your projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Navigation */}
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

export default CapstoneHostingGuide;
