/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                padding: "40px",
            },
            aspectRatio: {
                image: "600 / 446",
            },
            colors: {
                white: "#ffffff",
                accent: "#0147FF",
                gray: {
                    50: "#f7f7f7",
                    400: "#d9dcd5",
                    900: "#282828",
                },
            },
            fontFamily: {
                title: ["Bebas Neue", "sans-serif"],
                condensed: ["Roboto Condensed", "sans-serif"],
                sans: ["Roboto Flex", "sans-serif"],
            },
        },
    },
    plugins: [],
};
