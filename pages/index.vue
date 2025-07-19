    <template>
      <div class="grid grid-cols-4 gap-4">
        <div v-if="products" v-for="product in productListState" :key="product.id">
          <ProductCom :product="product"></ProductCom>
         </div>

      </div>
    </template>


<script setup lang="ts">
import type {ProductDto} from "~/types/products/product.schema";
const productListState = useState<ProductDto[]>('ProductListState', () => [])

const {data:products, error} = await useFetch<ProductDto[]>('/api/products')

if(products.value){
  productListState.value = products.value
}
</script>