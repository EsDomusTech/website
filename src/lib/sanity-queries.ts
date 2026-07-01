import type { Service, Project, BlogPost, TeamMember } from "./site-data";
import { SERVICES, PROJECTS, BLOG_POSTS, FAQS, TEAM } from "./site-data";

export type Faq = { q: string; a: string };

export async function fetchServices(): Promise<Service[]> {
  return SERVICES;
}

export async function fetchService(slug: string): Promise<Service | null> {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export async function fetchProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function fetchProject(slug: string): Promise<Project | null> {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return BLOG_POSTS;
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function fetchFaqs(): Promise<Faq[]> {
  return FAQS;
}

export async function fetchTeam(): Promise<TeamMember[]> {
  return TEAM;
}
