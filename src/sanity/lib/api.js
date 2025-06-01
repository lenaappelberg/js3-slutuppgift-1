import { client } from "./client"
import { GET_EVENTS_BY_SLUG_QUERY, GET_EVENTS_QUERY, GET_FEATURES_QUERY } from "./queries"

export const getEvents=async () => {
    return client.fetch(GET_EVENTS_QUERY) 
}
export const getEventBySlug=async (slug) => {
    return client.fetch(GET_EVENTS_BY_SLUG_QUERY,{slug})
}
export const getFeatureBySlug=async (slug) => {
    return client.fetch(GET_FEATURES_QUERY,{slug})
}
