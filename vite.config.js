import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@components": fileURLToPath(
                new URL("./src/components", import.meta.url)
            ),
            "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
            "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
            "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        },
    },
});
