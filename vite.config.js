import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig(({
// plugins: [react()],
// assetsInclude: ["**/*.md"],
// esbuild: {
//   drop: ["console", "debugger"],
// },
//  });

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === "build") {
    return {
      plugins: [react()],
      assetsInclude: ["**/*.md"],
      esbuild: {
        drop: ["console", "debugger"],
      },
      // dev specific config
    };
  } else {
    // command === 'dev'
    return {
      plugins: [react()],
      assetsInclude: ["**/*.md"],
    };
  }
});
