import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const postIndexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

const categoryFields = groq`
  _id,
  name,
  description,
  coverImage,
  "slug": slug.current,
`

export const categoryQuery = groq`
*[_type == "category"] | order(name desc, _updatedAt desc) {
  ${categoryFields}
}`

export const categorySlugsQuery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`

export const categoryBySlugQuery = groq`
*[_type == "category" && slug.current == $slug][0] {
  ${categoryFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Category {
  _id: string
  name: string
  coverImage: any
  description: string
  slug?: string
}

export interface Settings {
  title?: string
  description?: any[]
  homeContent?: any[]
  ogImage?: {
    title?: string
  }
}
