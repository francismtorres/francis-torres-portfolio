import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration: enables JSX/Fast Refresh for React.
export default defineConfig({
  plugins: [react()],
});
