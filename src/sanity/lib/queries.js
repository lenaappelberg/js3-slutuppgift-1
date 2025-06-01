import { defineQuery } from "next-sanity";

export const GET_EVENTS_QUERY=defineQuery(
    `*[_type == 'event']{
  _id,
  name,
  "slug":slug.current,
  "image":{
    "url":image.asset->url,
    "alt":image.alt
  },
  description
}`
)
export const GET_EVENTS_BY_SLUG_QUERY=defineQuery(
    `*[_type == 'event'&& slug.current==$slug][0]{
  _id,
  name,
  "slug":slug.current,
  "image":{
    "url":image.asset->url,
    "alt":image.alt
  },
  description,
  date,
  location
}`
)
export const GET_FEATURES_QUERY=defineQuery(
  `*[_type == 'feature'&& slug.current==$slug][0]{
  _id,
  title,
  "slug":slug.current,
  description,
  date,
  location
}`
)
