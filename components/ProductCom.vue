<script setup lang="ts">


import type {ProductDto} from "~/types/products/product.schema";

const props  = defineProps<{product: ProductDto}>()
const productState = useState<ProductDto>('ProductState', () => ({
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate:0,
    count:0,
  },
  }))

const imageExample = ref("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")

const changeState = (product: ProductDto) => {
  productState.value = product
}

const user = useSupabaseUser()
const userCart = useCart()
const alreadyInCard = (cartState: Cart, productToCheck: ProductDto) => {
  return cartState.some(productInCart => productInCart.id === productToCheck.id)
}

const addToCard = (product: ProductDto) => {
  if (user.value) {
    userCart.value.push(product)
  } else {
    alert('Please login to add to cart')
  }
}

</script>
<template>

   <div :id="`product-${productState.id}` ">
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <NuxtLink :to="`/product-${productState.id}` ">
      <img class="p-8 rounded-t-lg" :src=" `${productState.image}`" alt="product image" />
    </NuxtLink>
    <NuxtLink :to="`/product-${productState.id}` ">
      <img class="p-8 rounded-t-lg" :src=" `${productState.description}`" alt="product image" />
    </NuxtLink>
    <div class="px-5 pb-5">
      <NuxtLink href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ productState.title }}</h5>
      </NuxtLink>
      <div class="flex items-center mt-2.5 mb-5">
        <h5>Rating: </h5>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{{productState.rating.rate}}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"> ${{productState.price}}</span>
        <button @click="addToCard(productState)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <span v-if="alreadyInCard(userCart, productState)" class="text-3xl font-bold text-gray-900 dark:text-white"> Item Added</span>
          <span v-else class="text-3xl font-bold text-gray-900 dark:text-white"> Add to Cart</span>
        </button>
        <span class="text-3xl font-bold text-gray-900 dark:text-white line-through"> {{ productState.price * 2 }}</span>
      </div>
    </div>
  </div>
   </div>
</template>