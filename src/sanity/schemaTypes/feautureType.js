import { defineArrayMember, defineField, defineType } from "sanity";

export const featuresSection=defineType({
    name:"feature",
    title:"feature",
    type:"object",
    fields:[
        defineField({
            name:"title",
            type:"string"
        }),
        defineField({
            name:"features",
            type:"array",
            of:[
                defineArrayMember({
                    name:"feature",
                    type:"object",
                    fields:[
                        defineField({
                            name:"title",
                            type:"string"
                        }),
                        defineField({
                            name:"description",
                            type:"string"
                        }),
                        defineField({
                        name:"date",
                        type:"datetime"
                        }),
                        defineField({
                        name:"location",
                        type:"geopoint"
                        })
                    ]
                })
            ]
        })

    ]
})