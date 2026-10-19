export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`

export const newTab = { target: '_blank', rel: 'noopener noreferrer' }
