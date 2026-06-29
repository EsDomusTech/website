import { sanity } from "./sanity";
import type { Service, Project, BlogPost, TeamMember } from "./site-data";

export type Faq = { q: string; a: string };

const SERVICE_PROJECTION = `{
  "slug": slug.current, name, titleFirst, titleSecond,
  metaTitle, metaDescription, excerpt, image,
  intro, features,
  "process": process[] { num, title, text }
}`;

const PROJECT_PROJECTION = `{
  "slug": slug.current, name, category, location, year, image,
  summary, description
}`;

const BLOG_PROJECTION = `{
  "slug": slug.current, title, cat, date, image,
  excerpt, readTime, body
}`;

export async function fetchServices(): Promise<Service[]> {
  return sanity.fetch(
    `*[_type == "service"] | order(_createdAt asc) ${SERVICE_PROJECTION}`
  );
}

export async function fetchService(slug: string): Promise<Service | null> {
  return sanity.fetch(
    `*[_type == "service" && slug.current == $slug][0] ${SERVICE_PROJECTION}`,
    { slug }
  );
}

export async function fetchProjects(): Promise<Project[]> {
  return sanity.fetch(
    `*[_type == "project"] | order(year desc) ${PROJECT_PROJECTION}`
  );
}

export async function fetchProject(slug: string): Promise<Project | null> {
  return sanity.fetch(
    `*[_type == "project" && slug.current == $slug][0] ${PROJECT_PROJECTION}`,
    { slug }
  );
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return sanity.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) ${BLOG_PROJECTION}`
  );
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return sanity.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] ${BLOG_PROJECTION}`,
    { slug }
  );
}

export async function fetchFaqs(): Promise<Faq[]> {
  return sanity.fetch(
    `*[_type == "faq"] | order(_createdAt asc) { q, a }`
  );
}

export async function fetchTeam(): Promise<TeamMember[]> {
  return sanity.fetch(
    `*[_type == "teamMember"] | order(_createdAt asc) { name, role, image }`
  );
}
