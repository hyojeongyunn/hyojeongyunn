import { Marked } from 'marked'

const marked = new Marked({
    renderer: {
        link({ href, tokens }) {
            return `<a href="${href}" target="_blank" rel="noopener noreferrer">${this.parser.parseInline(tokens)}</a>`
        },
    },
})

export const renderInline = (md: string) => marked.parseInline(md) as string
