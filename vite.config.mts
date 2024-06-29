/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	appType: "spa",
	test: {
		environment: "happy-dom",
		clearMocks: true,
		setupFiles: "./test/setup.ts",
	},
});
