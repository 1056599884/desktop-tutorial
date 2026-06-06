import softwareItems from '../data/software.json';
import { categoryMap } from '../data/categories';

export type Software = {
  name: string;
  slug: string;
  logo: string;
  category: string;
  tags: string[];
  platform: string[];
  license: '免费' | '开源' | '付费' | '试用' | string;
  description: string;
  features: string[];
  officialUrl: string;
  downloadUrl: string;
  githubUrl: string;
  alternatives: string[];
  tutorial: string[];
  updatedAt: string;
  isRecommended: boolean;
  isHot: boolean;
};

export const software = softwareItems as Software[];

export function getCategoryName(slug: string) {
  return categoryMap.get(slug)?.name ?? slug;
}

export function getSoftwareBySlug(slug: string) {
  return software.find((item) => item.slug === slug);
}

export function getAlternatives(item: Software) {
  const explicit = item.alternatives
    .map((slug) => getSoftwareBySlug(slug))
    .filter((value): value is Software => Boolean(value));

  if (explicit.length >= 3) {
    return explicit.slice(0, 3);
  }

  const sameCategory = software.filter((candidate) => candidate.category === item.category && candidate.slug !== item.slug && !explicit.some((alt) => alt.slug === candidate.slug));
  return [...explicit, ...sameCategory].slice(0, 3);
}

export function sortByUpdatedAt(items: Software[]) {
  return [...items].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}
