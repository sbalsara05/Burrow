const {nextui} = require("@nextui-org/theme");
/** @type {import("tailwindcss").Config} */
    module.exports = {
        content: [
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
        ],
        theme: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "white": "#ffffff",
                "black": "#000000",
                "taupe": {
                    100: "#e7decb",
                    400: "#d3c1a5",
                },
                "clay": {
                    100: "#ffe6e2",
                    400: "#ffcfc7",
                    700: "#e09689",
                    800: "#f46147",
                },
            },
            width : {
                "navbar" : 0.1,
                "main" : 0.9
            }
        },
        plugins: [nextui()],
    };
