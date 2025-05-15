import { defineQuery } from "next-sanity";

export const GET_PROJECTS_QUERY=defineQuery(`
    [_type=='project']{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        defineField({
            name:"name",
            string:"string"
        })
    }]`
)