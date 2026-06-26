// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync } from "fs";
import { resolve } from "path";

const LOVABLE_ADAPTER_PATH =
  "/dev-server/node_modules/@tanstack/start-client-core/dist/esm/fake-entries/plugin-adapters.js";
const LOCAL_ADAPTER_PATH = resolve(
  "./node_modules/@tanstack/start-server-core/dist/esm/empty-plugin-adapters.js"
);

export default defineConfig({
  vite: {
    server: { port: 5173 },
    resolve: {
      alias: {
        // The dev preview can request TanStack's client entry directly from node_modules;
        // keep this private import resolvable so hydration does not 500-loop.
        // In Lovable's container the /dev-server/ path exists; locally fall back to node_modules.
        "#tanstack-start-plugin-adapters": existsSync(LOVABLE_ADAPTER_PATH)
          ? LOVABLE_ADAPTER_PATH
          : LOCAL_ADAPTER_PATH,
      },
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
