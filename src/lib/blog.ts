import { getCollection } from 'astro:content'

export const getPosts = async () =>
    (await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

export const formatDate = (date: Date) => date.toISOString().slice(0, 10).replaceAll('-', '.')
