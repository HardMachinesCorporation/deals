import {z} from 'zod'

export const productSchema = z.object({
    id: z.coerce.number(),
    title: z.string(),
    price: z.coerce.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
        rate: z.coerce.number(),
        count: z.coerce.number()
    })

})

export type ProductDto = z.infer<typeof productSchema>
