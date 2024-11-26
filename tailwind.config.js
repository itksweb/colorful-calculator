/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "bg-color": "var(--bg-color)",
        "inputs-display-bg": "var(--inputs-display-bg-color)",
        "input-btn-text": "var(--input-btn-text-color)",
        "input-btn-bg": "var(--input-btn-bg-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "reset-btn-bg": "var(--reset-btn-bg-color)",
        "reset-btn-text": "var(--reset-btn-text-color)",
        "equal-btn-bg": "var(--equal-btn-bg-color)",
        "equal-btn-text": "var(--equal-btn-text-color)",
      },
      boxShadow: {
        "input-shadow": "var(--input-btn-box-shadow)",
        "equal-shadow": "var(--equal-btn-box-shadow)",
        "reset-shadow": "var(--reset-btn-box-shadow)",
      },
    },
  },
  plugins: [],
};
