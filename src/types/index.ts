// src/types/index.ts

export interface BenefitItem {
  name: string;
  desc: string;
  link: string;
  logo?: string;
  warning?: boolean;
}

export interface BenefitCategory {
  category: string;
  sectionClass: string;
  items: BenefitItem[];
}

export interface GuideStep {
  title: string;
  description: string;
  image?: string;
  tips?: string[];
}

export interface MaximizeGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  relatedBenefits: string[];
  icon?: string;
  colorClass?: string;
}
