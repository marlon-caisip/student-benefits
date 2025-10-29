// src/data/benefitsData.ts

import type { BenefitCategory } from '../types';
import roadmapLogo from '../assets/img/roadmap.png';
import fmhyLogo from '../assets/img/fmhy.png';
import pocketpalLogo from '../assets/img/pocketpal.png';

export const benefitsData: BenefitCategory[] = [
  {
    category: 'Developer Tools & Software',
    sectionClass: 'section-purple',
    items: [
      { 
        name: 'GitHub Student Developer Pack', 
        desc: 'Over 100+ free offers including GitHub Pro, GitHub Copilot Pro, and credits for DigitalOcean, Azure, and more.', 
        link: 'https://education.github.com/pack', 
        logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' 
      },
      { 
        name: 'JetBrains IDEs', 
        desc: 'Free access to all professional IDEs like IntelliJ IDEA Ultimate, PyCharm Professional, and WebStorm.', 
        link: 'https://www.jetbrains.com/community/education/#students', 
        logo: 'https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png' 
      },
      { 
        name: 'Visual Studio', 
        desc: 'Free access to Visual Studio Community and various coding packs for development.', 
        link: 'https://visualstudio.microsoft.com/insiders/', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg' 
      },
      { 
        name: 'Unity Student Plan', 
        desc: 'Free access to the real-time 3D development platform and cloud build services for game development.', 
        link: 'https://unity.com/products/unity-educator', 
        logo: 'https://cdn.worldvectorlogo.com/logos/unity-69.svg' 
      },
      { 
        name: 'FlutterFlow', 
        desc: 'Visual app builder for creating beautiful native mobile apps. Free education plan for students.', 
        link: 'https://flutterflow.typeform.com/to/VEA2GRZa?typeform-source=www.flutterflow.io', 
        logo: 'https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png' 
      }
    ]
  },
  {
    category: 'AI & Machine Learning Tools',
    sectionClass: 'section-red',
    items: [
      { 
        name: 'Google AI Studio', 
        desc: 'Free access to Google\'s generative AI tools for building AI applications with Gemini models.', 
        link: 'https://aistudio.google.com/', 
        logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' 
      },
      { 
        name: 'Google NotebookLM', 
        desc: 'AI-powered research assistant that helps you understand and synthesize information from your documents.', 
        link: 'https://notebooklm.google/', 
        logo: 'https://www.gstatic.com/images/branding/product/1x/notebooklm_96dp.png' 
      },
      { 
        name: 'Hugging Face', 
        desc: 'Free access to thousands of pre-trained ML models, datasets, and collaborative AI development tools.', 
        link: 'https://huggingface.co/', 
        logo: 'https://huggingface.co/front/assets/huggingface_logo.svg' 
      },
      { 
        name: 'Perplexity AI (Free 1 Year)', 
        desc: 'AI-powered research and answer engine with cited sources. Free Pro subscription for students.', 
        link: 'https://www.perplexity.ai/join/p/paypal-subscription', 
        logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png' 
      },
      { 
        name: 'Google One AI (Free 1 Year)', 
        desc: 'Enhanced Google services with AI features including Gemini Advanced access for students.', 
        link: 'https://one.google.com/ai-student?g1_landing_page=%2075&utm_source=gemini&utm_medium=web&utm_campaign=advmktgsite' 
      },
      { 
        name: 'PocketPal AI', 
        desc: 'Open-source AI assistant for personalized learning and productivity on your own device.', 
        link: 'https://github.com/a-ghorbani/pocketpal-ai', 
        logo: pocketpalLogo
      }
    ]
  },
  {
    category: 'Cloud Services & Hosting',
    sectionClass: 'section-orange',
    items: [
      { 
        name: 'Microsoft Azure for Students', 
        desc: '$100 in free credits annually plus access to over 25 free cloud services. No credit card required.', 
        link: 'https://azure.microsoft.com/en-us/free/students/', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' 
      },
      { 
        name: 'AWS Educate', 
        desc: 'Up to $100 in AWS credits, plus access to hands-on labs and valuable learning content.', 
        link: 'https://aws.amazon.com/education/awseducate/', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' 
      },
      { 
        name: 'Google Cloud Platform', 
        desc: '$300 in free credits for students to use on Google Cloud services.', 
        link: 'https://cloud.google.com/edu/students', 
        logo: 'https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png' 
      },
      { 
        name: 'DigitalOcean', 
        desc: '$200 in platform credit valid for 1 year, included in the GitHub Student Developer Pack.', 
        link: 'https://www.digitalocean.com/github-students', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg' 
      },
      { 
        name: 'Heroku', 
        desc: '$13/month in credits for 24 months, perfect for hosting student projects. Part of GitHub pack.', 
        link: 'https://www.heroku.com/students/', 
        logo: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg' 
      }
    ]
  },
  {
    category: 'Learning Platforms & Resources',
    sectionClass: 'section-blue',
    items: [
      { 
        name: 'Roadmap.sh', 
        desc: 'Community-driven roadmaps, guides, and resources to help you choose your path and grow your skills.', 
        link: 'https://roadmap.sh/',
        logo: roadmapLogo
      },
      { 
        name: 'FMHY - Free Media Heck Yeah', 
        desc: 'The largest collection of free tools, resources, and learning materials across all categories.', 
        link: 'https://fmhy.net/',
        logo: fmhyLogo
      },
      { 
        name: 'Educative', 
        desc: 'Interactive coding courses and tutorials. Free access to select courses through GitHub Student Developer Pack.', 
        link: 'https://www.educative.io/github-students?utm_source=github-student-pack' 
      },
      { 
        name: 'Codedex', 
        desc: 'Learn to code with interactive lessons and challenges. Free Pro access for students via GitHub Student Pack.', 
        link: 'https://www.codedex.io/github-students' 
      }
    ]
  },
  {
    category: 'Design & Creative Software',
    sectionClass: 'section-green',
    items: [
      { 
        name: 'Adobe Creative Cloud', 
        desc: 'A massive 60-70% discount on the full suite of Adobe apps, including Photoshop, Illustrator, and Premiere Pro.', 
        link: 'https://www.adobe.com/creativecloud/buy/students.html', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg' 
      },
      { 
        name: 'Autodesk', 
        desc: 'Free one-year educational access to software like AutoCAD, Maya, and Fusion 360.', 
        link: 'https://www.autodesk.com/education/edu-software' 
      },
      { 
        name: 'Canva Pro', 
        desc: 'Free access to Canva Pro\'s premium features for students and educators.', 
        link: 'https://www.canva.com/education/', 
        logo: 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg' 
      },
      { 
        name: 'Figma', 
        desc: 'Free access to the Professional plan, unlocking unlimited projects and team features for UI/UX design.', 
        link: 'https://www.figma.com/education/', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' 
      }
    ]
  },
  {
    category: 'Productivity & Organization',
    sectionClass: 'section-pink',
    items: [
      { 
        name: 'Microsoft Office 365', 
        desc: 'Completely free access to Word, Excel, PowerPoint, OneNote, and 1TB of OneDrive storage.', 
        link: 'https://www.microsoft.com/en-us/education/products/office', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg' 
      },
      { 
        name: 'Notion', 
        desc: 'Free access to the Pro plan with additional AI responses, perfect for notes and project management.', 
        link: 'https://www.notion.so/students', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' 
      },
      { 
        name: 'Grammarly Premium', 
        desc: 'Often provides free premium trials and discounts for student accounts to improve your writing.', 
        link: 'https://www.grammarly.com/edu' 
      },
      { 
        name: 'Evernote Premium', 
        desc: 'Significant discounts (often 50% or more) on the Premium plan for organizing notes and tasks.', 
        link: 'https://evernote.com/students' 
      },
      { 
        name: 'Tableau', 
        desc: 'A free one-year license for Tableau Desktop, a powerful data visualization tool.', 
        link: 'https://www.tableau.com/academic/students', 
        logo: 'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png' 
      },
      { 
        name: 'SlideCoach', 
        desc: 'AI-powered presentation coach to improve your public speaking skills. Free education plan for students.', 
        link: 'https://slidecoach.ai/en/education' 
      }
    ]
  },
  {
    category: 'Domains & Web Hosting',
    sectionClass: 'section-purple',
    items: [
      { 
        name: 'Namecheap (.me)', 
        desc: 'One year free .me domain registration and a free SSL certificate. Part of GitHub pack.', 
        link: 'http://nc.me/' 
      },
      { 
        name: '.TECH Domains', 
        desc: 'A free .TECH domain for one year to host your portfolio or project. Part of GitHub pack.', 
        link: 'https://get.tech/github-student-developer-pack', 
        logo: 'https://get.tech/favicon.ico' 
      },
      { 
        name: 'Name.com', 
        desc: 'A free domain with various extensions, including privacy protection. Part of GitHub pack.', 
        link: 'https://www.name.com/partner/github-students' 
      }
    ]
  },
  {
    category: 'Entertainment & Streaming',
    sectionClass: 'section-red',
    items: [
      { 
        name: 'Amazon Prime Student', 
        desc: 'A 6-month free trial followed by a 50% discount on the regular Prime membership.', 
        link: 'https://www.amazon.com/primestudent' 
      },
      { 
        name: 'Spotify + Hulu + SHOWTIME', 
        desc: 'Get all three services bundled for a low student price, typically $4.99/month.', 
        link: 'https://www.spotify.com/us/student/', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' 
      },
      { 
        name: 'Apple Music & Apple TV+', 
        desc: 'Discounted Apple Music subscription which also includes free access to Apple TV+.', 
        link: 'https://www.apple.com/us/shop/education-pricing', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Apple_Music_logo.svg' 
      },
      { 
        name: 'YouTube Premium', 
        desc: 'A significant discount on YouTube Premium for ad-free videos and music.', 
        link: 'https://www.youtube.com/premium/student', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' 
      }
    ]
  }
];
