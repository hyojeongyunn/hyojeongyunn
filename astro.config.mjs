import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

const rehypeExternalLinks = () => (tree) => {
    const visit = (node) => {
        if (node.tagName === 'a' && /^https?:/.test(node.properties.href)) {
            Object.assign(node.properties, { target: '_blank', rel: ['noopener', 'noreferrer'] })
        }
        node.children?.forEach(visit)
    }
    visit(tree)
}

export default defineConfig({
    site: 'https://hyojeongyunn.github.io',
    base: 'hyojeongyunn',
    integrations: [tailwind()],
    markdown: { rehypePlugins: [rehypeExternalLinks] },
})
