// src/data/maximizeGuidesData.ts

import type { MaximizeGuide } from '../types';

export const maximizeGuides: MaximizeGuide[] = [
  {
    id: 'digitalocean-hosting',
    title: 'Host Your Portfolio on DigitalOcean',
    description: 'Use your $200 DigitalOcean credit to create a professional portfolio website with custom domain and SSL.',
    category: 'Cloud',
    difficulty: 'Beginner',
    relatedBenefits: ['DigitalOcean', 'Namecheap (.me)', '.TECH Domains'],
    icon: 'Globe',
    colorClass: 'purple'
  },
  {
    id: 'azure-deployment',
    title: 'Deploy Your First App with Azure',
    description: 'Learn how to use your $100 Azure credits to deploy a full-stack application to the cloud with CI/CD pipeline.',
    category: 'Cloud',
    difficulty: 'Beginner',
    relatedBenefits: ['Microsoft Azure for Students', 'GitHub Student Developer Pack'],
    icon: 'Cloud',
    colorClass: 'red'
  },
  {
    id: 'github-actions-cicd',
    title: 'Setting Up CI/CD with GitHub Actions',
    description: 'Automate your testing and deployment workflow using GitHub Actions - completely free with your student account.',
    category: 'DevOps',
    difficulty: 'Intermediate',
    relatedBenefits: ['GitHub Student Developer Pack'],
    icon: 'Settings',
    colorClass: 'orange'
  },
  {
    id: 'jetbrains-mastery',
    title: 'Master JetBrains IDEs for Your Stack',
    description: 'Get the most out of IntelliJ, PyCharm, or WebStorm with advanced features, plugins, and productivity shortcuts.',
    category: 'Development',
    difficulty: 'Intermediate',
    relatedBenefits: ['JetBrains IDEs'],
    icon: 'Code',
    colorClass: 'green'
  },
  {
    id: 'figma-design-system',
    title: 'Build a Design System in Figma',
    description: 'Learn to create reusable components, maintain consistency, and collaborate with teams using Figma Pro.',
    category: 'Design',
    difficulty: 'Intermediate',
    relatedBenefits: ['Figma'],
    icon: 'Palette',
    colorClass: 'pink'
  },
  {
    id: 'aws-serverless',
    title: 'Build Serverless APIs with AWS',
    description: 'Use AWS Lambda, API Gateway, and DynamoDB with your AWS Educate credits to build scalable serverless applications.',
    category: 'Cloud',
    difficulty: 'Advanced',
    relatedBenefits: ['AWS Educate'],
    icon: 'Zap',
    colorClass: 'purple'
  },
  {
    id: 'notion-productivity',
    title: 'Create Your Ultimate Student Workspace',
    description: 'Set up Notion as your all-in-one hub for notes, tasks, projects, and job applications with AI assistance.',
    category: 'Productivity',
    difficulty: 'Beginner',
    relatedBenefits: ['Notion'],
    icon: 'FileText',
    colorClass: 'red'
  },
  {
    id: 'adobe-creative-workflow',
    title: 'Master Adobe Creative Cloud Workflow',
    description: 'Learn professional workflows between Photoshop, Illustrator, and After Effects for content creation.',
    category: 'Design',
    difficulty: 'Intermediate',
    relatedBenefits: ['Adobe Creative Cloud'],
    icon: 'Image',
    colorClass: 'orange'
  },
  {
    id: 'copilot-productivity',
    title: 'Maximize Productivity with GitHub Copilot',
    description: 'Master GitHub Copilot Pro to create prototypes, learn new frameworks, and build projects more efficiently.',
    category: 'Development',
    difficulty: 'Beginner',
    relatedBenefits: ['GitHub Student Developer Pack'],
    icon: 'Bot',
    colorClass: 'blue'
  },
  {
    id: 'ai-model-deployment',
    title: 'Deploy AI Models with Hugging Face',
    description: 'Train, fine-tune, and deploy machine learning models using Hugging Face Spaces and Inference API.',
    category: 'AI/ML',
    difficulty: 'Advanced',
    relatedBenefits: ['Hugging Face', 'Google Cloud Platform'],
    icon: 'Brain',
    colorClass: 'blue'
  },
  {
    id: 'multi-cloud-strategy',
    title: 'Leverage Multiple Cloud Providers',
    description: 'Learn when to use Azure, AWS, or GCP for different use cases and maximize your free credits across platforms.',
    category: 'Cloud',
    difficulty: 'Advanced',
    relatedBenefits: ['Microsoft Azure for Students', 'AWS Educate', 'Google Cloud Platform'],
    icon: 'CloudCog',
    colorClass: 'green'
  },
  {
    id: 'personal-brand',
    title: 'Build Your Developer Brand',
    description: 'Use free domains, hosting, and design tools to create a professional online presence and portfolio.',
    category: 'Career',
    difficulty: 'Beginner',
    relatedBenefits: ['Namecheap (.me)', 'DigitalOcean', 'Canva Pro', 'Figma'],
    icon: 'Rocket',
    colorClass: 'pink'
  }
];
