import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

const color = (name) => `rgb(var(--${name}) / <alpha-value>)`
const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900]

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
            colors: {
                page: color('page'),
                neutral: Object.fromEntries(shades.map((shade) => [shade, color(`neutral-${shade}`)])),
                accent: { DEFAULT: color('accent'), soft: color('accent-soft') },
            },
        },
    },
    plugins: [typography],
}
