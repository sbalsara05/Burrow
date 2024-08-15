/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "m-3white": "var(--m-3white)",
        "m3-schemes-on-surface": "var(--m3-schemes-on-surface)",
        "m3-schemes-on-surface-variant": "var(--m3-schemes-on-surface-variant)",
        "m3-schemes-outline-variant": "var(--m3-schemes-outline-variant)",
        "m3-schemes-primary": "var(--m3-schemes-primary)",
        "m3-schemes-surface": "var(--m3-schemes-surface)",
        "m3-schemes-surface-container-highest": "var(--m3-schemes-surface-container-highest)",
        "m3-schemes-surface-container-lowest": "var(--m3-schemes-surface-container-lowest)",
        "m3-schemes-tertiary-container": "var(--m3-schemes-tertiary-container)",
        "m3-state-layers-on-primary-opacity-08": "var(--m3-state-layers-on-primary-opacity-08)",
        "m3-state-layers-on-primary-opacity-12": "var(--m3-state-layers-on-primary-opacity-12)",
        "m3-state-layers-on-secondary-container-opacity-12": "var(--m3-state-layers-on-secondary-container-opacity-12)",
        "m3-state-layers-on-surface-opacity-08": "var(--m3-state-layers-on-surface-opacity-08)",
        "m3-state-layers-on-surface-opacity-12": "var(--m3-state-layers-on-surface-opacity-12)",
        "m3-state-layers-on-surface-variant-opacity-08": "var(--m3-state-layers-on-surface-variant-opacity-08)",
        "m3-state-layers-on-surface-variant-opacity-12": "var(--m3-state-layers-on-surface-variant-opacity-12)",
        "m3-state-layers-on-tertiary-container-opacity-08": "var(--m3-state-layers-on-tertiary-container-opacity-08)",
      },
      fontFamily: {
        "m3-body-large": "var(--m3-body-large-font-family)",
        "m3-body-medium": "var(--m3-body-medium-font-family)",
        "m3-headline-medium": "var(--m3-headline-medium-font-family)",
        "m3-label-large": "var(--m3-label-large-font-family)",
        "m3-label-medium": "var(--m3-label-medium-font-family)",
        "m3-label-medium-prominent": "var(--m3-label-medium-prominent-font-family)",
        "m3-title-large": "var(--m3-title-large-font-family)",
        "m3-title-medium": "var(--m3-title-medium-font-family)",
      },
      boxShadow: {
        "m3-elevation-light-1": "var(--m3-elevation-light-1)",
        "m3-elevation-light-3": "var(--m3-elevation-light-3)",
        "m3-elevation-light-4": "var(--m3-elevation-light-4)",
      },
    },
  },
  plugins: [],
};
