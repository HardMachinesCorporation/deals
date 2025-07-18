<script setup lang="ts">
import UserNav from "~/components/UserNav.vue";
import PublicNav from "~/components/PublicNav.vue";

const isAuthenticatedUser = useSupabaseUser()
</script>
<template>
  <div>
  <h2>Header</h2>
  <PublicNav v-if="!isAuthenticatedUser"/>
  <UserNav v-if="isAuthenticatedUser"/>
  </div>
</template>