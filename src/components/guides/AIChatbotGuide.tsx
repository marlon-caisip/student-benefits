// src/components/AIChatbotGuide.tsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle, AlertCircle, Zap, Lock, Brain, Copy, Check } from 'lucide-react';

const AIChatbotGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
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
            <Bot className="w-12 h-12 text-blue-500" />
            <h1 className="text-5xl font-black text-white">
              Build a Simple AI Chatbot
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Create an interactive AI chatbot using DigitalOcean's Serverless Inference API with vanilla JavaScript
          </p>
        </div>

        {/* Part 1: Prerequisites & Setup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">1</span>
            Prerequisites & Setup
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">What You'll Need</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>DigitalOcean Account:</strong> Sign up at <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">DigitalOcean</a></li>
                <li><strong>GitHub Student Developer Pack:</strong> Get your $200 credit at <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub Education</a></li>
                <li><strong>Text Editor:</strong> VS Code, Sublime Text, or any code editor you prefer</li>
                <li><strong>Basic Knowledge:</strong> HTML, CSS, and JavaScript fundamentals</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Project Structure</h3>
              <p className="text-gray-300 mb-3">Create a new folder for your project with these files:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><code className="text-purple-300">index.html</code> - Main HTML structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><code className="text-purple-300">style.css</code> - Styling for the chatbot</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><code className="text-purple-300">script.js</code> - JavaScript logic and API calls</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Pro Tip:</strong> With your GitHub Student Pack, you get $200 in DigitalOcean credits valid for 1 year - perfect for experimenting with AI!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Getting DigitalOcean AI Access */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">2</span>
            Getting DigitalOcean AI Access
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 1: Access the AI Platform</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Log into your DigitalOcean account</li>
                <li>Navigate to <a href="https://cloud.digitalocean.com/gen-ai/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">DigitalOcean AI Platform</a></li>
                <li>Click on <strong>"Get Started"</strong> or <strong>"Serverless Inference"</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 2: Create Your API Access Key</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>In the AI Platform, find <strong>"API Keys"</strong> or <strong>"Access Keys"</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Click <strong>"Create New Key"</strong> or <strong>"Generate Model Access Key"</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Give it a descriptive name like "AI Chatbot Project"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Copy and save the key securely - you won't be able to see it again!</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Step 3: Test Your Access</h3>
              <p className="text-gray-300 mb-3">Try this quick test to verify your API key works:</p>
              <CodeBlock
                codeId="api-test"
                code={`fetch('https://inference.do-ai.run/v1/models', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_MODEL_ACCESS_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
              />
              <p className="text-gray-400 text-sm mt-2">Open your browser's console and paste this code (with your actual key) to see available models.</p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-300 flex items-start gap-2">
                <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Security Warning:</strong> Never share your API key publicly or commit it to version control! Keep it safe like a password.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 3: Building the HTML Interface */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">3</span>
            Building the HTML Interface
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Create index.html</h3>
              <p className="text-gray-300 mb-3">Here's the complete HTML structure for your chatbot:</p>
              <CodeBlock
                codeId="html-code"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My AI Chatbot</title>
    <link rel="stylesheet" href="style.css">
    <!-- Add marked.js for markdown rendering -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">
            <h1>🤖 AI Chatbot</h1>
            <p>Powered by DigitalOcean Serverless Inference</p>
        </div>
        <div id="chat-messages" class="chat-messages"></div>
        <div class="chat-input">
            <input type="text" id="user-input" 
                   placeholder="Type your message..." 
                   aria-label="Message input">
            <button id="send-btn">Send</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">What's Happening Here?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Semantic Structure:</strong> Clean, organized HTML with meaningful class names</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Accessibility:</strong> Includes aria-label for screen readers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Separation of Concerns:</strong> External CSS and JS files keep code organized</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Responsive Design:</strong> Viewport meta tag ensures mobile compatibility</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Part 4: Styling with CSS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">4</span>
            Styling with CSS
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Create style.css</h3>
              <p className="text-gray-300 mb-3">Add this modern, responsive styling:</p>
              <CodeBlock
                codeId="css-code"
                code={`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.chat-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    width: 100%;
    max-width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
}

.chat-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 20px 20px 0 0;
    text-align: center;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #f5f5f5;
}

.message {
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 18px;
    max-width: 80%;
    word-wrap: break-word;
}

.user-message {
    background: #667eea;
    color: white;
    margin-left: auto;
    text-align: right;
}

.ai-message {
    background: white;
    color: #333;
    margin-right: auto;
}

/* Markdown styling for AI messages */
.ai-message code {
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
}

.ai-message pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 8px 0;
}

.ai-message pre code {
    background: transparent;
    padding: 0;
    color: #f8f8f2;
}

.ai-message strong {
    font-weight: 700;
}

.ai-message em {
    font-style: italic;
}

.ai-message ul, .ai-message ol {
    margin: 8px 0;
    padding-left: 20px;
}

.ai-message li {
    margin: 4px 0;
}

.chat-input {
    display: flex;
    padding: 20px;
    background: white;
    border-radius: 0 0 20px 20px;
    border-top: 1px solid #e0e0e0;
}

#user-input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
}

#user-input:focus {
    border-color: #667eea;
}

#send-btn {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 24px;
    margin-left: 10px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
}

#send-btn:hover {
    background: #5568d3;
}

#send-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}`}
              />
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Customize It:</strong> Feel free to change colors, fonts, and spacing to match your style!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 5: JavaScript Implementation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">5</span>
            JavaScript Implementation
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Create script.js</h3>
              <p className="text-gray-300 mb-3">Here's the complete working JavaScript with API integration:</p>
              <CodeBlock
                codeId="javascript-code"
                code={`const API_KEY = 'YOUR_MODEL_ACCESS_KEY'; // Replace with your key
const API_URL = 'https://inference.do-ai.run/v1/chat/completions';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Store conversation history
let conversationHistory = [];

// System message to set AI persona
const systemMessage = {
    role: "system",
    content: "You are a helpful, friendly AI assistant who explains things clearly and concisely. You're patient and encouraging, especially with students learning new topics."
};

// Add message to chat UI with markdown rendering
function addMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = \`message \${isUser ? 'user-message' : 'ai-message'}\`;
    
    // Use marked.js to render markdown (install via: <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>)
    if (typeof marked !== 'undefined' && !isUser) {
        messageDiv.innerHTML = marked.parse(content);
    } else {
        messageDiv.textContent = content;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message to DigitalOcean API with streaming
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Disable input while processing
    userInput.disabled = true;
    sendBtn.disabled = true;

    // Add user message to UI and history
    addMessage(message, true);
    conversationHistory.push({ role: "user", content: message });
    userInput.value = '';

    // Create message div for streaming
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message';
    chatMessages.appendChild(messageDiv);

    try {
        // Call DigitalOcean Serverless Inference API with streaming
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${API_KEY}\`
            },
            body: JSON.stringify({
                model: 'openai-gpt-oss-120b',
                messages: [systemMessage, ...conversationHistory],
                max_tokens: 500,
                temperature: 0.7,
                stream: true // Enable streaming
            })
        });

        if (!response.ok) {
            throw new Error(\`API Error: \${response.status}\`);
        }

        // Read streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullContent = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\\n').filter(line => line.trim().startsWith('data: '));

            for (const line of lines) {
                const data = line.replace('data: ', '').trim();
                if (data === '[DONE]') break;

                try {
                    const parsed = JSON.parse(data);
                    const content = parsed.choices[0]?.delta?.content || '';
                    if (content) {
                        fullContent += content;
                        // Update message with markdown rendering
                        if (typeof marked !== 'undefined') {
                            messageDiv.innerHTML = marked.parse(fullContent);
                        } else {
                            messageDiv.textContent = fullContent;
                        }
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }
                } catch (e) {
                    // Skip invalid JSON chunks
                }
            }
        }

        // Add complete response to history
        conversationHistory.push({ role: "assistant", content: fullContent });

    } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'Sorry, I encountered an error. Please try again.';
    } finally {
        // Re-enable input
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Initial greeting
addMessage('Hello! I\\'m your AI assistant. How can I help you today?', false);`}
              />
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-300 flex items-start gap-2">
                <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Important:</strong> Replace <code className="text-red-200">YOUR_MODEL_ACCESS_KEY</code> with your actual API key from DigitalOcean!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Part 6: AI Persona & Prompt Engineering */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">6</span>
            AI Persona & Prompt Engineering
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Understanding AI Personas</h3>
              <p className="text-gray-300 mb-4">
                The <strong>system message</strong> is like giving your AI a personality and role. It sets the tone, expertise level, and behavior for all conversations. Think of it as your chatbot's "character creation"!
              </p>
              <p className="text-gray-300 mb-4">Here are different personas you can try:</p>
              
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-300 mb-2">🎓 Friendly Tutor</h4>
                  <div className="relative group">
                    <button
                      onClick={() => copyToClipboard(`const tutorPersona = {
    role: "system",
    content: "You are a patient tutor who breaks down complex topics into simple explanations. Use analogies and examples. Always encourage the student."
};`, 'tutor-persona')}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'tutor-persona' ? (
                        <Check className="w-3 h-3 text-green-300" />
                      ) : (
                        <Copy className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <pre className="bg-black p-3 rounded text-xs overflow-x-auto overflow-y-auto max-h-[400px]" style={{ scrollbarColor: '#1a1a1a #000000', scrollbarWidth: 'thin' }}>
                      <code className="text-gray-300">{`const tutorPersona = {
    role: "system",
    content: "You are a patient tutor who breaks down complex topics into simple explanations. Use analogies and examples. Always encourage the student."
};`}</code>
                    </pre>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Perfect for learning new concepts!</p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-green-300 mb-2">💻 Coding Assistant</h4>
                  <div className="relative group">
                    <button
                      onClick={() => copyToClipboard(`const coderPersona = {
    role: "system",
    content: "You are an expert programmer who provides clean, well-commented code examples. You explain your reasoning and suggest best practices."
};`, 'coder-persona')}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'coder-persona' ? (
                        <Check className="w-3 h-3 text-green-300" />
                      ) : (
                        <Copy className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <pre className="bg-black p-3 rounded text-xs overflow-x-auto overflow-y-auto max-h-[400px]" style={{ scrollbarColor: '#1a1a1a #000000', scrollbarWidth: 'thin' }}>
                      <code className="text-gray-300">{`const coderPersona = {
    role: "system",
    content: "You are an expert programmer who provides clean, well-commented code examples. You explain your reasoning and suggest best practices."
};`}</code>
                    </pre>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Great for debugging and learning to code!</p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-pink-300 mb-2">✍️ Creative Writer</h4>
                  <div className="relative group">
                    <button
                      onClick={() => copyToClipboard(`const writerPersona = {
    role: "system",
    content: "You are a creative writing assistant with a flair for storytelling. You help users develop characters, plots, and vivid descriptions."
};`, 'writer-persona')}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'writer-persona' ? (
                        <Check className="w-3 h-3 text-green-300" />
                      ) : (
                        <Copy className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <pre className="bg-black p-3 rounded text-xs overflow-x-auto overflow-y-auto max-h-[400px]" style={{ scrollbarColor: '#1a1a1a #000000', scrollbarWidth: 'thin' }}>
                      <code className="text-gray-300">{`const writerPersona = {
    role: "system",
    content: "You are a creative writing assistant with a flair for storytelling. You help users develop characters, plots, and vivid descriptions."
};`}</code>
                    </pre>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Ideal for creative projects and brainstorming!</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Prompt Engineering Best Practices</h3>
              <p className="text-gray-300 mb-4">The way you ask questions matters! Here are 5 tips to get better responses:</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">1. Be Specific and Clear</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                      <p className="text-red-300 font-semibold text-sm mb-1">❌ Bad:</p>
                      <p className="text-gray-300 text-sm">"Tell me about Python"</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                      <p className="text-green-300 font-semibold text-sm mb-1">✅ Good:</p>
                      <p className="text-gray-300 text-sm">"Explain how list comprehensions work in Python with 3 examples"</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">2. Provide Context</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                      <p className="text-red-300 font-semibold text-sm mb-1">❌ Bad:</p>
                      <p className="text-gray-300 text-sm">"Fix this code"</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                      <p className="text-green-300 font-semibold text-sm mb-1">✅ Good:</p>
                      <p className="text-gray-300 text-sm">"This function should sort by age but gives a KeyError. How can I fix it?"</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">3. Set Constraints</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                      <p className="text-red-300 font-semibold text-sm mb-1">❌ Bad:</p>
                      <p className="text-gray-300 text-sm">"Write a function"</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                      <p className="text-green-300 font-semibold text-sm mb-1">✅ Good:</p>
                      <p className="text-gray-300 text-sm">"Write a JavaScript email validator. Under 10 lines with comments."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">4. Use Structured Formats</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>"Explain X in 3 bullet points"</li>
                    <li>"Compare A vs B in a table format"</li>
                    <li>"Give me 5 examples of Y"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">5. Iterate and Refine</h4>
                  <p className="text-gray-300 ml-4">Start with a basic prompt, then add constraints based on the response. Keep refining until you get exactly what you need!</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Pro Tip:</strong> The more specific your prompt, the better the AI can help you. Don't be afraid to ask follow-up questions!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Discovering Available Models */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-purple-500/20 text-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-black">7</span>
            Discovering Available AI Models
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Fetch Available Models</h3>
              <p className="text-gray-300 mb-4">
                DigitalOcean offers multiple AI models you can use! Here's how to fetch the complete list of available models programmatically:
              </p>
              
              <CodeBlock
                codeId="models-list-code"
                code={`const url = "https://inference.do-ai.run/v1/models";
const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_MODEL_ACCESS_KEY"
};

fetch(url, {
    method: "GET",
    headers: headers
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching models:', error));`}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">How to Use This</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Test in Browser Console:</strong> Open DevTools (F12) on your chatbot page and run this code to see all available models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Build a Model Selector:</strong> Create a dropdown menu in your chatbot UI to let users choose different AI models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Compare Models:</strong> Different models have different strengths - some are better for coding, others for creative writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Dynamic Updates:</strong> The API response includes model IDs you can use in your <code>model</code> parameter</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <p className="text-purple-300 flex items-start gap-2">
                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Enhancement Idea:</strong> Try adding a model selector to your chatbot! Store the selected model in a variable and use it in the API call instead of hardcoding <code>'openai-gpt-oss-120b'</code>.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Next Steps & Enhancements</h2>
          
          <div className="liquid-glass-strong rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              You've built a working AI chatbot! Here are some ideas to take it further:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Add Loading Indicators</h3>
                  <p className="text-gray-400 text-sm">Show "AI is thinking..." while waiting for responses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Message Timestamps</h3>
                  <p className="text-gray-400 text-sm">Display when each message was sent</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Clear Conversation</h3>
                  <p className="text-gray-400 text-sm">Add a button to start a fresh chat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Save Chat History</h3>
                  <p className="text-gray-400 text-sm">Use localStorage to persist conversations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Deploy to DigitalOcean</h3>
                  <p className="text-gray-400 text-sm">Use App Platform to host your chatbot online</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Explore Other Models</h3>
                  <p className="text-gray-400 text-sm">Try different AI models available on the platform</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Voice Input</h3>
                  <p className="text-gray-400 text-sm">Add speech recognition using the Web Speech API</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-purple-300">Multi-language Support</h3>
                  <p className="text-gray-400 text-sm">Let users chat in different languages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Official Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-400" />
            Official Resources
          </h2>
          
          <div className="liquid-glass-strong rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              Learn more from the official DigitalOcean documentation:
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors group"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    Use Serverless Inference
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Official guide on using DigitalOcean's Gradient AI Platform for serverless AI inference
                  </p>
                  <p className="text-xs text-purple-400 mt-2">
                    docs.digitalocean.com →
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <div className="mt-12 text-center">
          <Link 
            to="/maximize#guide-digitalocean-ai-chatbot" 
            onClick={() => {
              setTimeout(() => {
                const element = document.getElementById('guide-digitalocean-ai-chatbot');
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

export default AIChatbotGuide;
