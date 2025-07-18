// plugins/flowbite.client.ts
import { defineNuxtPlugin } from '#app'
import { initFlowbite } from 'flowbite'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.mixin({
        mounted() {
            initFlowbite()
        }
    })
})