// src/data/claimingGuideData.ts

import type { GuideStep } from '../types';

export const claimingGuideSteps: GuideStep[] = [
  {
    title: 'Verify Your Student Status',
    description: 'Make sure you have an active .edu email address from your school. This is required to prove your student status.',
    tips: [
      'If your school doesn\'t provide .edu emails, you can use alternative documents like a student ID or enrollment letter.',
      'Keep your student ID or enrollment verification handy as you might need it.'
    ]
  },
  {
    title: 'Visit GitHub Education',
    description: 'Go to education.github.com and sign in with your GitHub account. If you don\'t have one, create a free account first.',
    tips: [
      'Use a professional username - this account will be part of your developer portfolio.',
      'Enable two-factor authentication for better security.'
    ]
  },
  {
    title: 'Apply for Student Benefits',
    description: 'Click on "Get benefits" or "Join GitHub Education" and fill out the application form with your academic information.',
    tips: [
      'Use your school-issued .edu email address for faster approval.',
      'Provide accurate information about your school and expected graduation date.',
      'Take a clear photo of your student ID if required.'
    ]
  },
  {
    title: 'Wait for Approval',
    description: 'GitHub typically reviews applications within a few days. You\'ll receive an email notification once approved.',
    tips: [
      'Check your spam folder if you don\'t see the approval email.',
      'Some applications may be approved instantly if using a .edu email.',
      'If rejected, you can reapply with additional documentation.'
    ]
  },
  {
    title: 'Access Your Benefits',
    description: 'Once approved, visit education.github.com/pack to see all available benefits. Click "Get access" on each benefit you want to use.',
    tips: [
      'Start with the most valuable benefits first (GitHub Copilot, cloud credits).',
      'Read the terms for each benefit - some require separate account creation.',
      'Bookmark the Student Developer Pack page for easy access to all benefits.'
    ]
  },
  {
    title: 'Renew Annually',
    description: 'Your student benefits typically last for 1-2 years. Remember to renew before they expire to maintain access.',
    tips: [
      'Set a calendar reminder 1 month before your benefits expire.',
      'GitHub will usually send renewal reminders to your email.',
      'You can renew as long as you\'re still a student.'
    ]
  }
];
