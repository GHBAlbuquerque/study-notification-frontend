import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
  'process.env.REACT_APP_BACKEND_NOTIFICATION_URL': JSON.stringify(process.env.REACT_APP_BACKEND_NOTIFICATION_URL),
  'process.env.REACT_APP_BACKEND_NOTIFICATION_ENDPOINT': JSON.stringify(process.env.REACT_APP_BACKEND_NOTIFICATION_ENDPOINT),
  }
});
