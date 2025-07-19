import type {ProductDto} from "~/types/products/product.schema";

export const useCart = () => {
    return useState<ProductDto[]>('cart', () => [])
}