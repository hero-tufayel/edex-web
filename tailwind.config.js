module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "var(--gray-100)",
        "gray-50": "var(--gray-50)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        grayblack: "var(--grayblack)",
        graywhite: "var(--graywhite)",
        "primary-900": "var(--primary-900)",
        "secondary-50": "var(--secondary-50)",
        "secondary-500": "var(--secondary-500)",
        "x2nd-primary300": "var(--x2nd-primary300)",
        "x2nd-primary50": "var(--x2nd-primary50)",
        "x2nd-primary500": "var(--x2nd-primary500)",
        "x2nd-primary900": "var(--x2nd-primary900)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-body-XL": "var(--body-body-XL-font-family)",
        "body-large-400": "var(--body-large-400-font-family)",
        "body-large-500": "var(--body-large-500-font-family)",
        "body-regular-400": "var(--body-regular-400-font-family)",
        "body-regular-500": "var(--body-regular-500-font-family)",
        "body-regular-600": "var(--body-regular-600-font-family)",
        display: "var(--display-font-family)",
        "header-heading-1": "var(--header-heading-1-font-family)",
        "header-heading-3": "var(--header-heading-3-font-family)",
        "header-heading-4": "var(--header-heading-4-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
