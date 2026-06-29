import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? "zlzgp38h",
  dataset: import.meta.env.VITE_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});
